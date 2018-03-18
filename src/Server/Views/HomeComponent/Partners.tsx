import * as React from 'react';
import * as i18n from "i18n";
import {Partner} from './SmallElements/Partner';
import {Emojify} from '../../Utils/Emojify';

export class Partners extends React.Component<any, any> {
    render() {
        return (
            <section className="section -partners partners" id="partners">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">{i18n.__("Партнеры")}</h2>
                        <p className="topic-desc">
                            {i18n.__("Как же без партнерских ссылок? Ведь в это время для успеха нужно иметь десяток ссылок на проекты, которые, либо не существуют, либо ничего о вас не знают")}
                        </p>
                    </div>

                    <div className="partners-list">
                        <Partner
                            href="https://coinwizard.me"
                            partnerEventKey="coinwizard"
                            title={i18n.__("Портфельный менеджер, который хочет выжить без ICO. Тчетно. CoinWizard")}
                            imageSrc="coinwizard.png"
                            imageAlt="CoinWizard"
                            imageTitle={i18n.__("Какже убого смотрится этот логотип..")}
                        />

                        <Partner
                            href="https://ewf.in.ua"
                            partnerEventKey="ewf"
                            title={i18n.__("Что бы ремонтировать хату — нужен подрядчик. Eco Wooden Frame справиться с этим лучше чем кто либо")}
                            imageSrc="eco-wooden-frame.png"
                            imageAlt="Eco Wooden Frame"
                        />

                        <Partner
                            href="https://cubits.com"
                            partnerEventKey="cubits"
                            title={i18n.__("Crypto Exchange, что так-же запускали свое ICO. Или еще не запускали..? Что-то запутался.")}
                            imageSrc="cubits.svg"
                            imageAlt="Cubits"
                        />

                        <Partner
                            href="https://incrypted.net"
                            partnerEventKey="incrypted_net"
                            title={i18n.__("Надо ведь от куда-то брать свежие новости о крипте?")}
                            imageSrc="incrypted.svg"
                            imageAlt="Incrypted"
                            imageTitle={i18n.__("Если вдруг, это лого для светлого фона не очень — я не виноват.")}
                        />
                    </div>
                    <p className="partners-about">
                        {i18n.__("Если хотите в список партнеров, то напишите об этом проекте,")} {' '}
                        <a href="#contacts" className="link anchor">{i18n.__("свяжитесь со мной")}</a> {' '}
                        {i18n.__("и как-нибудь решим этот вопрос.")}
                    </p>
                </div>
            </section>
        )
    }
}