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

                    <div id="IcoReactComponent" className="ico-status-container">
                        <div className="ico-status-loading">Loading...</div>
                    </div>
                </div>
            </section>
        )
    }
}