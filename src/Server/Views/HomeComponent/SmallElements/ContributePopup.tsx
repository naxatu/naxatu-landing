import * as React from 'react';
import * as i18n from "i18n";
import * as Numeral from 'numeral';
import * as Constants from '../../../Contants';
import {Emojify, contractInstance, TokenStatsInterface} from '../../../Utils';
const QRCode = require('qrcode.react');

export interface IPopupProps {
    token: TokenStatsInterface;
}

export class ContributePopup extends React.Component<IPopupProps, any> {
    render() {
        const contract = contractInstance.contract;

        return (
            <div className="cnt-popup" id="cnt-popup">
                <div className="cnt-popup-overlay __js_close_contribute"/>

                <div className="cnt-popup-content">
                    <div className="cnt-popup-close-overlay __js_close_contribute"/>
                    <section className="cnt-popup-modal">

                        <h2 className="cnt-popup-modal__title">{i18n.__('Подкинуть на Хату')}</h2>
                        <button className="cnt-popup-close __js_close_contribute">
                            <span className="cnt-popup-close__line"/>
                            <span className="cnt-popup-close__line"/>
                        </button>

                        <p className="contract__desc">
                            {i18n.__("Это адрес контракта, на который нужно перевести Ethereum для получения XATA-токенов. Он же является адресом XATA-токенов.")}
                            <br/>

                            {i18n.__("Советую использовать MyEtherWallet или MetaMask. Не переводите Ether с бирж или сервисов, где не имеете полный доступ к кошельку, а иначе не будет доступа к XATA.")}
                            <br/>

                            <b>GasLimit = 80 000</b>
                        </p>

                        <div className="contract-wrapper">
                            <textarea readOnly={true} value={contract} className="contract__address"
                                      id="contract-address"/>
                            <div className="contract-buttons">
                                <button className="contract-buttons__item -copy __js-copy-contract">
                                    <i className="far fa-copy"/>
                                </button>

                                <a className="contract-buttons__item -link"
                                   href={`http://etherscan.com/token/${contract}`}
                                   target="_blank">
                                    <i className="fas fa-link"/>
                                </a>
                            </div>
                        </div>

                        <QRCode className="contract-qr"
                                value={contract}
                                renderAs="svg"
                        />
                    </section>
                </div>
            </div>
        );
    }
}