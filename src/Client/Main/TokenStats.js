import BigNumber from 'bignumber.js';
import Axios from 'axios';

const target = 150000;
const etherscanUrl = "https://api.etherscan.io/api";
let weiPerEther = new BigNumber("1000000000000000000", 10);

export function getPrice() {
    const requestParams = {
        module: 'stats',
        action: 'ethprice'
    };

    return Axios.get(etherscanUrl, {params: requestParams}).then((response) => {
        const result = response.data.result;

        if (!result || !result.ethusd) {
            return null;
        }

        return parseFloat(result.ethusd);
    });
}

export function extractValue() {
    const requestParams = {
        module: "proxy",
        action: "eth_call",
        to: "0x27f706edde3aD952EF647Dd67E24e38CD0803DD6",
        data: "0xc59d48470000000000000000000000000000000000000000000000000000000000000000",
        tag: "latest"
    };

    return getPrice().then(price => {

        const resolveAxiosResponse = (response) => {
            const result = response.data.result;
            if (result == null || result.length == null || result.length < 193) {
                return null;
            }

            let totalContributionExact = new BigNumber(result.substr(2, 64), 16).div(weiPerEther);
            let totalContributionUSDExact = totalContributionExact.multipliedBy(price);

            return {
                price: price,
                totalContribution: totalContributionExact.toNumber(),
                totalContributionUSD: totalContributionUSDExact.toNumber(),
                targetPercent: totalContributionUSDExact.div(target).times(100).toNumber(),
                totalSupply: new BigNumber(result.substr(66, 64), 16).div(weiPerEther).toNumber(),
                totalBonusTokensIssued: new BigNumber(result.substr(130, 64), 16).div(weiPerEther).toNumber(),
                purchasingAllowed: new BigNumber(result.substr(194, 64), 16).isZero() == false
            };
        };

        return Axios
            .get(etherscanUrl, {params: requestParams})
            .then(resolveAxiosResponse);
    })
}