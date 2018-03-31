import * as React from 'react';
import * as i18n from "i18n";
import * as Numeral from 'numeral';
import {Emojify, contractInstance, TokenStatsInterface} from '../../Utils';
import * as Constants from '../../Contants';
import {ContributePopup} from './SmallElements/ContributePopup';

export interface ISOStatusProps {
    token: TokenStatsInterface | null;
}

export class IcoStatus extends React.Component<ISOStatusProps, any> {

    renderIsoStatus(): any {
        const {token} = this.props;

        if (!token) {
            return null;
        }

        const secondsToGo = (Constants.END_DATE.getTime() - (new Date().getTime()));
        const daysToGo = Numeral(secondsToGo).divide(24 * 60 * 60 * 1000).format("0");

        const tokenJson = JSON.stringify(token);

        return (
            <div className="ico-status">
                <p className="ico-info">
                    <b>{i18n.__("Цена XATA")}:</b> 1 XATA = 0.01 ETH ≈ ${Numeral(token.price / 100).format('0.00')}
                </p>

                <script dangerouslySetInnerHTML={{__html: `window.__token=${tokenJson}`}}/>

                <div className="ico-status__progress-wrapper">
                    <div className="ico-status-progress">
                        <div className="ico-status-progress__line">
                            <div className="ico-status-progress__line-fill"
                                 style={{width: Numeral(token.targetPercent).format('0.000%')}}
                            />
                        </div>

                        <div className="ico-status-progress__sub">
                            <div className="ico-status-progress__target">
                                <h3 className="ico-status-progress__target-value">
                                    ${Numeral(token.totalContributionUSD).format('0,0')}
                                </h3>
                                <span className="ico-status-progress__target-target">
                                    {i18n.__("собрано от цели в $%s", Numeral(Constants.TARGET).format('0,0'))}
                                </span>
                            </div>

                            <div className="ico-status-progress__target">
                                <h3 className="ico-status-progress__target-value">
                                    {daysToGo}
                                </h3>
                                <span className="ico-status-progress__target-target">
                                    {i18n.__("до окончания ICO, 13 Мая 2018")}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="ico-status-items">
                    <div className="ico-status-item">
                        <div className="ico-status-item__value">
                            {Numeral(token.totalContribution).format('0.0000')} ETH
                        </div>
                        <h4 className="ico-status-item__name">{i18n.__("Собрано ETH")}</h4>
                    </div>

                    <div className="ico-status-item">
                        <div className="ico-status-item__value">
                            {Numeral(token.sqrM).format('0,0')} M<sup>2</sup>
                        </div>
                        <h4 className="ico-status-item__name">{i18n.__("Можно купить")}</h4>
                    </div>

                    <div className="ico-status-item">
                        <div className="ico-status-item__value">
                            {Numeral(token.totalSupply).format('0,0.00')} XATA
                        </div>
                        <h4 className="ico-status-item__name">
                            {i18n.__("Эмитировано XATA")}<br/>
                            <span
                                dangerouslySetInnerHTML={{__html: i18n.__("в том числе <b>%s XATA</b> бонусов", Numeral(token.totalBonusTokensIssued).format('0,0.00'))}}
                            />
                        </h4>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const contract = contractInstance.contract;
        const {token} = this.props;

        const text = i18n.__("Основная цель — собрать <b>$180,000</b> на квартиру.") + '<br/>'
            + i18n.__("Краудфандинг продлится до <b>13 мая 2018</b>.") + ' '
            + i18n.__("Чем больше соберу, тем круче хата.");

        return (
            <section className="section -ico ico" id="ico">
                <div className="section-content">
                    <input type="hidden" id="__contract-address-container" value={contract}/>
                    <div className="topic -left">
                        <h2 className="topic-title">{i18n.__("Подкинуть на Хату")}</h2>
                    </div>
                    <p className="paragraph" dangerouslySetInnerHTML={{__html: text}}/>

                    {token && <ContributePopup token={token}/>}
                    <div className="ico-contribute">
                        <button
                            className="ico-contribute__the-most-important-button ico-contribute-button __js_contribute"
                            contribute-btn-key="main">
                            {i18n.__('Подкинуть на Хату')}
                        </button>

                        <div id="ContributeMetamask" className="ico-contribute-wrapper"/>
                    </div>

                    <div className="ico-status-container">
                        {this.renderIsoStatus()}
                    </div>
                </div>
            </section>
        )
    }
}