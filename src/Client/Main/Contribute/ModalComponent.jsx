import * as React from 'react';
import classNames from 'classnames';
import {sendGAEvent} from '../AnalyticsHelper';
import Numeral from 'numeral';

const QRCode = require('qrcode.react');
import {ByMyEtherWallet} from './ByMyEtherWallet';
import {ByMetamask} from './ByMetamask';

const DEFAULT_VALUE = '1';

export class ModalComponent extends React.Component {

    state = {
        copied: false,
        value: DEFAULT_VALUE
    };

    onChangeValue = (event) => {
        const value = event.target.value;
        this.setState(() => {
            return {value};
        });
    };

    onCopy = () => {
        this.refs.contractAddress.select();
        document.execCommand("Copy");

        sendGAEvent('contract', 'copy');

        this.setState(() => ({copied: true}));

        setTimeout(() => {
            this.setState(() => ({copied: false}));
        }, 1000);
    };

    calcXATA() {
        const {value} = this.state;
        const {token} = this.props;

        let valueToSend = parseFloat(value.replace(',', '.').trim()) || 0;
        if (valueToSend < 0) valueToSend = 0;

        const base = valueToSend * 100;
        const bonus = valueToSend >= 0.01 ? (valueToSend + token.totalContribution) : 0;

        return {
            base: base,
            bonus: bonus,
            total: base + bonus
        }
    }

    render() {
        const {copied, value} = this.state;
        const {web3js, token} = this.props;
        const valueToSend = parseFloat(value.replace(',', '.').trim()) || 1;

        const xataResult = this.calcXATA();

        return (
            <div>
                <label className="buy-label">XATA address</label>
                <div className="contract-wrapper">
                    <div className={classNames("contract-copied", copied && "-show")}>Copied</div>
                    <input readOnly={true} value={token.contract} className="contract__address" ref="contractAddress"/>
                    <button className="contract-copy __js-copy-contract" onClick={this.onCopy}>Copy</button>
                </div>
                {/*<QRCode className="contract-qr" value={contract} renderAs="svg"/>*/}

                <div className="buy-value">
                    <div className="buy-value-input__wrapper">
                        <input value={value}
                               onChange={this.onChangeValue}
                               className="buy-value-input"
                               id="ValueInput"
                               type="text"
                        />

                        <label className="buy-value-input__label" htmlFor="ValueInput">ETH</label>
                    </div>

                    <div className="buy-value-calc">
                        <label className="buy-value-calc__item -invisible">
                            <b>{Numeral(xataResult.base).format("0,0.[00]")}</b>
                            <span>XATA</span>
                        </label>

                        <label className="buy-value-calc__separate -invisible">+</label>

                        <label className="buy-value-calc__item -invisible">
                            <b>{Numeral(xataResult.bonus).format("0,0.[00]")}</b>
                            <span>Bonus</span>
                        </label>

                        <label className="buy-value-calc__separate -invisible">=</label>

                        <label className="buy-value-calc__item">
                            <b>{Numeral(xataResult.total).format("0,0.[00]")}</b>
                            <span>XATA</span>
                        </label>
                    </div>
                </div>

                <div className="buy-gas row">
                    <div className="col buy-gas-item">
                        <label className="buy-label">Gas limit</label>
                        <div>80,000</div>
                    </div>

                    <div className="col buy-gas-item">
                        <label className="buy-label">Gas price</label>
                        <div>8</div>
                    </div>
                </div>

                <div className="buy-buttons row">
                    <div className="col">
                        <ByMyEtherWallet to={token.contract} value={valueToSend} className="buy-button btn"/>
                    </div>

                    {web3js && <div className="col">
                        <ByMetamask web3js={web3js} to={token.contract} value={valueToSend} className="buy-button btn"/>
                    </div>}
                </div>


            </div>
        )
    }
}
