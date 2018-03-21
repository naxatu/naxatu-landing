import * as React from 'react';
import * as i18n from "i18n";
import {IDomainProps}  from '../../Utils/DomainManager';
import {Emojify} from '../../Utils/Emojify';

export interface IFAQProps {
    domain: IDomainProps
}

export class FAQ extends React.Component<IFAQProps, any> {
    render() {

        const {
            domain
        } = this.props;

        return (
            <section className="section -faq faq" id="faq">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">{i18n.__("Часто задаваемые")}</h2>
                    </div>

                    <div className="faq-block">
                        <article className="faq-item">
                            <h3 className="faq-item__title">{i18n.__("Это либо тупая шутка, либо скам!")}</h3>
                            <p className="paragraph faq-item__answer">
                                {i18n.__("Ни в коем случае. Все по-настоящему и на 100% прозрачно. Никто никого не обманывает — все собранные деньги будут потрачены мне на квартиру в ЖК Rybalsky.")}
                                <br/><br/>
                                {i18n.__("Есть даже трансляция происходящего в Telegram —")} {' '}
                                <a href={`https://t.me/${domain.social.telegram}`} className="link" target="_blank">
                                    t.me/{domain.social.telegram}
                                </a>.
                            </p>
                        </article>

                        <article className="faq-item">
                            <h3 className="faq-item__title">{i18n.__("Будут ли XATA-токены торговаться?")}</h3>
                            <p className="paragraph faq-item__answer">
                                {i18n.__("Я надеюсь на это, очень надеюсь. В любом случае, я постараюсь их пропихнуть на всякие биржи с прикольными названиями (Yobit, Huobi)")}{' '}
                                ({i18n.__("но это не точно")}).
                            </p>
                        </article>

                        <article className="faq-item">
                            <h3 className="faq-item__title">
                                {i18n.__("Почему бы просто не заработать на хату, как это делают все нормальные люди?")}
                            </h3>
                            <p className="paragraph faq-item__answer">
                                {i18n.__("Во-первых, мне как программисту, нужно зарабатывать около 12 лет.")}
                                <br/>
                                {i18n.__("Во-вторых, ICO — это интересней и ставит перед тобой целый челендж.")}
                                <br/>
                                {i18n.__("К тому же организация ICO, это тоже работа — требущая внимания к деталям, слаженной работы, хорошей команды:")}
                                <br/><br/>
                                {i18n.__("Это маркетинг и социальный маркетинг, дизайн, брендинг, проработка текстов и концепции, Блокчейн (Solidity), Front-End и Back-end разработка.")}
                            </p>
                        </article>

                        <article className="faq-item">
                            <h3 className="faq-item__title">{i18n.__("Чего ты хочешь этим достичь?")}</h3>
                            <p className="paragraph faq-item__answer">
                                {i18n.__("Хаты. Реально хочу купить квартиру. За ваш Ethereum, нажитый «тяжким» трудом инвестора и трейдера.")}
                                <br/><br/>
                                {i18n.__("Но также я хочу показать, что с помощью ICO и краудфандинга можно не только нагло отбирать у людей деньги, заставляя их верить в нереализуемые проекты, но и воплощать мечты, какими бы глупыми они не были.")}{' '}
                                {i18n.__("Криптовалютный бум привлекает все больше и больше людей в поиске наживы, и с этим нужно бороться.")}
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        )
    }
}