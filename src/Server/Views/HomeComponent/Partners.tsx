import * as React from 'react';
import {Emojify} from '../../Utils/Emojify';

export class Partners extends React.Component<any, any> {
    render() {
        return (
            <section className="section -partners partners" id="partners">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">Партнеры</h2>
                        <p className="topic-desc">
                            Как же без партнерских ссылок? Ведь в это время для успеха
                            нужно иметь десяток ссылок на проекты, которые, либо не существуют,
                            либо ничего о вас не знают
                        </p>
                    </div>

                    <div className="partners-list">
                        <a href="https://coinwizard.me" className="partners-item" target="_blank"
                           title="Портфельный менеджер, который хочет выжить без ICO. Тчетно. CoinWizard">
                            <img src="/image/partners/coinwizard.png" alt="CoinWizard" className="partners-item__image"
                                 title="Какже убого смотрится этот логотип.."/>
                        </a>

                        <a href="https://ewf.in.ua" className="partners-item" target="_blank"
                           title="Что бы ремонтировать хату &mdash; нужен подрядчик. Eco Wooden Frame справиться с этим лучше чем кто либо">
                            <img src="/image/partners/eco-wooden-frame.png"
                                 alt="Eco Wooden Frame"
                                 className="partners-item__image"
                                 title="Что бы ремонтировать хату &mdash; нужен подрядчик. Eco Wooden Frame справиться с этим лучше чем кто либо"/>
                        </a>
                    </div>

                    <p className="partners-about">
                        Если хотите в список партнеров, то напишите об этом проекте, {' '}
                        <a href="#contacts" className="link anchor">свяжитесь со мной</a> и как-нибудь
                        решим этот вопрос.
                    </p>
                </div>
            </section>
        )
    }
}