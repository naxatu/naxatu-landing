import BigNumber from 'bignumber.js';
import Axios, {AxiosResponse} from 'axios';
import * as Constants from '../Contants';
import {contractInstance} from './ContractObserver';

const axiosInstance = Axios.create({});

export interface TokenStatsInterface {
    price: number;
    contract: string;
    sqrM: number;
    totalContribution: number;
    totalContributionUSD: number;
    targetPercent: number;
    totalSupply: number;
    totalBonusTokensIssued: number;
    purchasingAllowed: boolean;
}

export class StatusObserver {

    protected state: TokenStatsInterface | null;

    constructor() {
        this.state = null;

        this.fetchValueExtracting();

        setInterval(this.fetchValueExtracting, 20000);
    }

    fetchValueExtracting = (): void => {
        this.extractValue()
            .then((result: TokenStatsInterface|null) => {
                if (!result) {
                    return;
                }
                
                this.state = result;
            });
    };

    getState(): TokenStatsInterface | null {
        return this.state;
    }

    protected getPrice(): any {
        const requestParams = {
            module: 'stats',
            action: 'ethprice'
        };

        return axiosInstance
            .get<any>(Constants.ETHERSCAN_URL, {params: requestParams})
            .then((response: AxiosResponse) => {
                const result = response.data.result;

                if (!result || !result.ethusd) {
                    return 0;
                }

                return parseFloat(result.ethusd);
            });
    }

    protected extractValue(): any {
        if (!contractInstance.contract) {
            throw Error('Contract address must be set!');
        }

        const requestParams = {
            module: "proxy",
            action: "eth_call",
            to: contractInstance.contract,
            data: "0xc59d48470000000000000000000000000000000000000000000000000000000000000000",
            tag: "latest"
        };

        return this.getPrice().then((price: number) => {
            const resolveAxiosResponse = (response: AxiosResponse) => {
                const result = response.data.result;
                if (result == null || result.length == null || result.length < 193) {
                    return null;
                }

                let totalContributionExact = new BigNumber(result.substr(2, 64), 16).div(Constants.WEI_PER_ETHER);
                let totalContributionUSDExact = totalContributionExact.multipliedBy(price);

                return {
                    price: price,
                    contract: contractInstance.contract,
                    sqrM: totalContributionUSDExact.div(Constants.sqrMPrice).toNumber(),
                    totalContribution: totalContributionExact.toNumber(),
                    totalContributionUSD: totalContributionUSDExact.toNumber(),
                    targetPercent: totalContributionUSDExact.div(Constants.TARGET).toNumber(),
                    totalSupply: new BigNumber(result.substr(66, 64), 16).div(Constants.WEI_PER_ETHER).toNumber(),
                    totalBonusTokensIssued: new BigNumber(result.substr(130, 64), 16).div(Constants.WEI_PER_ETHER).toNumber(),
                    purchasingAllowed: new BigNumber(result.substr(194, 64), 16).isZero() == false
                };
            };

            return axiosInstance
                .get(Constants.ETHERSCAN_URL, {params: requestParams})
                .then(resolveAxiosResponse);
        })
    }
}