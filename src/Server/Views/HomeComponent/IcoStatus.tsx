import * as React from 'react';
import * as i18n from "i18n";
import * as Numeral from 'numeral';
import {contractInstance, TokenStatsInterface} from '../../Utils';
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

        return (
            <section className="section -ico ico" id="ico">
                <div className="section-content">
                    <input type="hidden" id="__contract-address-container" value={contract}/>
                    <div className="topic -left">
                        <h2 className="topic-title">ICO Results</h2>
                    </div>
                    <div className="ico-status-container">
                        {this.renderIsoStatus()}
                    </div>
                </div>
            </section>
        )
    }
}