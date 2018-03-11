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
                    <div className="topic">
                        <h2 className="topic-title">Подкидывай на Хату</h2>
                        <p className="topic-desc">Пока горячее. Пока можно.</p>
                    </div>

                    <div id="IcoReactComponent" className="ico-status-container">
                        <div className="ico-status-loading">Loading...</div>
                    </div>
                </div>
            </section>
        )
    }
}