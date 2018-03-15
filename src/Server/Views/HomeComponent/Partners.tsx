import * as React from 'react';
import {Partner} from './SmallElements/Partner';
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

                        <Partner
                            href="https://coinwizard.me"
                            partnerEventKey="coinwizard"
                            title="Портфельный менеджер, который хочет выжить без ICO. Тчетно. CoinWizard"
                            imageSrc="coinwizard.png"
                            imageAlt="CoinWizard"
                            imageTitle="Какже убого смотрится этот логотип.."
                        />

                        <Partner
                            href="https://ewf.in.ua"
                            partnerEventKey="ewf"
                            title="Что бы ремонтировать хату &mdash; нужен подрядчик. Eco Wooden Frame справиться с этим лучше чем кто либо"
                            imageSrc="eco-wooden-frame.png"
                            imageAlt="Eco Wooden Frame"
                        />

                        <Partner
                            href="https://cubits.com"
                            partnerEventKey="cubits"
                            title="Crypto Exchange, что так-же запускали свое ICO. Или еще не запускали..? Что-то запутался."
                            imageSrc="cubits.svg"
                            imageAlt="Cubits"
                        />

                        <Partner
                            href="https://incrypted.net"
                            partnerEventKey="incrypted_net"
                            title="Надо ведь от куда-то брать свежие новости о крипте?"
                            imageSrc="incrypted.svg"
                            imageAlt="Incrypted"
                            imageTitle="Если вдруг, это лого для светлого фона не очень &mdash; я не виноват."
                        />
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