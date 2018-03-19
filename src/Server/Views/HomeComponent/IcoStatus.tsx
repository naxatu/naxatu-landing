import * as React from 'react';
import * as i18n from "i18n";
import * as Numeral from 'numeral';
import {Emojify} from '../../Utils/Emojify';
import * as Constants from '../../Contants';
import {contractInstance} from '../../Utils/ContractObserver';
import {TokenStatsInterface} from '../../Utils/TokenStats';

export interface ISOStatusProps {
    token: TokenStatsInterface | null;
}

export class IcoStatus extends React.Component<ISOStatusProps, any> {

    renderIsoStatus(): any {
        const {token} = this.props;

        if (!token) {
            return null;
        }

        return (
            <div className="ico-status">
                <p className="ico-info">
                    <b>{i18n.__("Цена XATA")}:</b> 1 XATA = 0.01 ETH ≈ ${Numeral(token.price / 100).format('0.00')}
                </p>

                <div className="ico-status__progress-wrapper">
                    <div className="ico-status-percentage">{Numeral(token.targetPercent).format('0.0%')}</div>
                    <div className="ico-status-progress">
                        <div className="ico-status-progress__line">
                            <div className="ico-status-progress__line-fill"
                                 style={{width: Numeral(token.targetPercent).format('0.000%')}}
                            />
                        </div>
                        <div className="ico-status-progress__target">
                            <b>${Numeral(token.totalContributionUSD).format('0,0')}</b> {i18n.__("из")} {' '}
                            <b>${Numeral(Constants.TARGET).format('0,0')}</b>
                        </div>
                    </div>
                </div>

                <div className="ico-share">
                    <h3 className="ico-share__title">
                        {i18n.__("Помогите мне собрать на хату. Ваш репост «Собираю на Хату» очень поможет.")}
                    </h3>
                    <div id="ShareComponent" className="ico-share__buttons"></div>
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
                            (<span
                            dangerouslySetInnerHTML={{__html: i18n.__("в том числе <b>%s XATA</b> бонусов", Numeral(token.totalBonusTokensIssued).format('0,0.00'))}}
                        />)
                        </h4>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const contract = contractInstance.contract;

        const text = i18n.__("Основная цель — собрать <b>$180,000</b> на квартиру.") + '<br/>'
            + i18n.__("Краудфандинг продлится до <b>13 мая 2018</b>.") + ' '
            + i18n.__("Достижения заданной цели — это не конец, так что сумма может превысить изначальную. Чем больше соберу, тем круче хата.");

        return (
            <section className="section -ico ico" id="ico">
                <div className="section-content">
                    <input type="hidden" id="__contract-address-container" value={contract}/>
                    <div className="topic -left">
                        <h2 className="topic-title">{i18n.__("Подкинуть на Хату")}</h2>
                    </div>

                    <p className="paragraph" dangerouslySetInnerHTML={{__html: text}}/>

                    <div className="contract">
                        <p className="contract__desc">
                            {i18n.__("Это адрес контракта, на который нужно перевести Ethereum для получения XATA-токенов. Он же является адресом XATA-токенов.")}
                            <br/>

                            {i18n.__("Советую использовать MyEtherWallet или MetaMask. Не переводите Ether с бирж или сервисов, где не имеете полный доступ к кошельку, а иначе не будет доступа к XATA.")}
                            <br/>

                            <b>GasLimit = 80 000</b>
                        </p>

                        <div className="contract-wrapper">
                            <input readOnly={true} value={contract} type="text" className="contract__address"
                                   id="contract-address"/>
                            <button className="contract-copy __js-copy-contract"><i className="far fa-copy"/></button>
                        </div>

                        <div className="contract-links">
                            <a href={`http://etherscan.com/token/${contract}`}
                               target="_blank">{i18n.__("Адрес XATA на Etherscan")}</a>
                        </div>
                    </div>

                    <div className="ico-contribute">

                    </div>

                    <div className="ico-status-container">
                        {this.renderIsoStatus()}
                    </div>
                </div>
            </section>
        )
    }
}