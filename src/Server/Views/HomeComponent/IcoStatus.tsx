import * as React from 'react';
import {Emojify} from '../../Utils/Emojify';
import {contractInstance} from '../../Utils/ContractObserver';

export class IcoStatus extends React.Component<any, any> {
    render() {
        const contract = contractInstance.contract;

        return (
            <section className="section -ico ico" id="ico">
                <div className="section-content">
                    <input type="hidden" id="__contract-address-container" value={contract}/>
                    <div className="topic -left">
                        <h2 className="topic-title">Подкинуть на Хату</h2>
                    </div>

                    <p className="paragraph">
                        Основная цель &mdash; собрать <b>$180,000</b> на квартиру.<br/>
                        Краудфандинг продлится до <b>13 мая 2018</b>. Достижения заданной цели &mdash; это не конец,
                        так что сумма может превысить изначальную. Чем больше соберу &mdash; тем круче хата.
                    </p>

                    <div className="contract">
                        <p className="contract__desc">
                            Это адрес контракта, на который нужно перевести Ethereum для получения
                            XATA-токенов. Он же является адресом XATA-токенов.
                            <br/>
                            Советую использовать MyEtherWallet или MetaMask. Не переводите Ether с бирж или сервисов,
                            где не имеете полный доступ к кошельку, а иначе не будет доступа к XATA.
                            <br/>

                            <b>GasLimit = 80 000</b>
                        </p>

                        <div className="contract-wrapper">
                            <input readOnly={true} value={contract} type="text" className="contract__address"
                                   id="contract-address"
                            />
                            <button className="contract-copy __js-copy-contract">
                                <i className="far fa-copy"/>
                            </button>
                        </div>

                        <div className="contract-links">
                            <a href={`http://etherscan.com/token/${contract}`}
                               target="_blank">Адрес XATA на Etherscan</a>
                        </div>
                    </div>

                    <div id="IcoReactComponent" className="ico-status-container">
                        <div className="ico-status-loading">Loading...</div>
                    </div>
                </div>
            </section>
        )
    }
}