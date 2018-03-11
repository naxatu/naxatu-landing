import BigNumber from 'bignumber.js';
import Axios from 'axios';
import * as Constants from './Contants';
import {contract} from './ContractAddress'

export function getPrice() {
    const requestParams = {
        module: 'stats',
        action: 'ethprice'
    };

    return Axios.get(Constants.ETHERSCAN_URL, {params: requestParams}).then((response) => {
        const result = response.data.result;

        if (!result || !result.ethusd) {
            return null;
        }

        return parseFloat(result.ethusd);
    });
}

export function extractValue() {
    if (!contract) {
        throw Error('Contract address must be set!');
    }

    const requestParams = {
        module: "proxy",
        action: "eth_call",
        to: contract,
        data: "0xc59d48470000000000000000000000000000000000000000000000000000000000000000",
        tag: "latest"
    };

    return getPrice().then(price => {

        const resolveAxiosResponse = (response) => {
            const result = response.data.result;
            if (result == null || result.length == null || result.length < 193) {
                return null;
            }

            let totalContributionExact = new BigNumber(result.substr(2, 64), 16).div(Constants.WEI_PER_ETHER);
            let totalContributionUSDExact = totalContributionExact.multipliedBy(price);

            return {
                price: price,
                contract: contract,
                totalContribution: totalContributionExact.toNumber(),
                totalContributionUSD: totalContributionUSDExact.toNumber(),
                targetPercent: totalContributionUSDExact.div(Constants.TARGET).toNumber(),
                totalSupply: new BigNumber(result.substr(66, 64), 16).div(Constants.WEI_PER_ETHER).toNumber(),
                totalBonusTokensIssued: new BigNumber(result.substr(130, 64), 16).div(Constants.WEI_PER_ETHER).toNumber(),
                purchasingAllowed: new BigNumber(result.substr(194, 64), 16).isZero() == false
            };
        };

        return Axios
            .get(Constants.ETHERSCAN_URL, {params: requestParams})
            .then(resolveAxiosResponse);
    })
}