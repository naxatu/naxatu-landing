import * as React from 'react';
import {sendGAEvent} from "../AnalyticsHelper";

export class ByMetamask extends React.Component {

    onContributeByMetamask = () => {
        const {web3js, to, value} = this.props;
        const requestParams = {
            to: to,
            value: web3js.toWei(value, 'ether'),
            gas: 80000,
            gasPrice: web3js.toWei(8, 'gwei')
        };

        const responseHandler = (error, result) => {
            if (error) {
                console.log(error);
                sendGAEvent('metamask', 'error');
                alert('Something wrong..');
                return;
            }

            alert('Thank you for contribution!');
            sendGAEvent('metamask', 'success', null, value * 400);
        };

        try {
            web3js.eth.sendTransaction(requestParams, responseHandler);
            sendGAEvent('metamask', 'open');
        } catch (error) {
            sendGAEvent('metamask', 'error');
            alert('Unblock your MetaMask');
        }
    };

    render() {
        const {className} = this.props;
        return <button
            className={className}
            onClick={this.onContributeByMetamask}
        >Metamask</button>;
    }
}
