import * as React from 'react';
import {Emojify} from '../../Utils/Emojify';

export class Contacts extends React.Component<any, any> {
    render() {
        return (
            <section className="section -contacts contacts" id="contacts">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">Контактики</h2>
                    </div>
                </div>
            </section>
        )
    }
}