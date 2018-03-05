import * as React from 'react';
import {Emojify} from '../../Utils/Emojify';

export class IcoStatus extends React.Component<any, any> {
    render() {
        return (
            <section className="section -ico ico" id="ico">
                <div className="section-content">
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