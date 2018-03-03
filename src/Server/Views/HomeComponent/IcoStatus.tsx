import * as React from 'react';
import {Emojify} from '../../Utils/Emojify';

export class IcoStatus extends React.Component<any, any> {
    render() {
        return (
            <section className="section -ico ico" id="ico">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">
                            Подкидывай за XATA токены.
                            <br/>Пока горячее. Пока можно.
                        </h2>
                    </div>

                    <div id="IcoReactComponent" className="ico-status-container">
                        <div className="ico-status-loading">Loading...</div>
                    </div>
                </div>
            </section>
        )
    }
}