import * as React from 'react';
import {sendGAEvent} from '../AnalyticsHelper';
import {contract} from '../ContractAddress';

const DEFAULT_VALUE = 0.01;

export class MetamaskComponent extends React.Component {

    state = {
        message: null,
        value: "0.03"
    };

    extractValue = () => {
        const {value} = this.state;
        if (!value) {
            return DEFAULT_VALUE;
        }

        return parseFloat(value.replace(',', '.').trim()) || DEFAULT_VALUE;
    };

    onChangeValue = (event) => {
        const value = event.target.value;
        this.setState(() => {
            return {value};
        });
    };

    setMessage(message, status) {
        this.setState(() => {
            return {
                message: message,
                messageStatus: status
            }
        });
    }

    onContributeByMetamask = (event) => {
        const {web3js} = this.props;

        const sendingValue = this.extractValue();

        const requestParams = {
            to: contract,
            value: web3js.toWei(sendingValue, 'ether'),
            gas: 110000,
            gasPrice: web3js.toWei(4, 'gwei')
        };

        console.log(web3js.toWei(sendingValue, 'ether'));

        const responseHandler = (error, result) => {
            if (error) {
                console.log(error);
                this.setMessage('', 'error');
                return;
            }

            this.setMessage('Thank you for contribution!', 'success');
            sendGAEvent('metamask', 'success', null, sendingValue * 540);
        };

        try {
            web3js.eth.sendTransaction(requestParams, responseHandler);
            sendGAEvent('metamask', 'open');
        } catch (error) {
            this.setMessage('Unblock your MetaMask extension', 'error');
        }
    };

    render() {

        const {message, messageStatus, value} = this.state;

        return (
            <React.Fragment>
                <div className="ico-contribute__button-container">
                    <div className="ico-contribute-input__wrapper">
                        <input type="text"
                               placeholder="0.03"
                               className="ico-contribute-input"
                               value={value}
                               id="MetamaskValueInput"
                               onChange={this.onChangeValue}
                        />
                        <label className="ico-contribute-input__label" htmlFor="MetamaskValueInput">ETH</label>
                    </div>

                    <div className="ico-contribute-button -metamask" onClick={this.onContributeByMetamask}>
                        <img src="/image/icons/metamask.svg" className="ico-contribute-button__icon"/>
                        Contribute by MetaMask
                    </div>
                </div>

                {message && <div className={`ico-contribute-message -${messageStatus}`}>{message}</div>}
            </React.Fragment>
        )
    }
}
