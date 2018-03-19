import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {MetamaskComponent} from './MetamaskComponent';

export function init() {
    if (typeof web3 === 'undefined') {
        return;
    }

    let web3js = new Web3(web3.currentProvider);
    const metamaskContainer = document.getElementById('ContributeMetamask');
    if (!metamaskContainer) {
        return;
    }

    web3js.version.getNetwork((err, netId) => {
        if (err) return;
        switch (netId) {
            case "1":
                ReactDOM.render(<MetamaskComponent web3js={web3js}/>, metamaskContainer);
                metamaskContainer.classList.add('-active');
                break;

            default:
                console.log("Metamask ID:", netId);
        }
    });
}