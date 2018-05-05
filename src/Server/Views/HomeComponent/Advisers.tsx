import * as React from 'react';
import * as i18n from "i18n";
import {Adviser} from './SmallElements/Adviser';

export class Advisers extends React.Component<any, any> {
    render() {
        return (
            <section className="section -advisers advisers" id="advisers">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">Advisers</h2>
                        <p className="topic-desc">
                            {i18n.__("В любом ICO есть адвайзеры. Он призваны торговать лицом. Но все же, встречаются специалисты, что понимают в сфере строительства и ремонта и могут дать полезные советы. Ага...")}
                        </p>
                    </div>

                    <div className="adviser-list">
                        <Adviser
                            name="Andrey Krishtal"
                            role={i18n.__("Смотрит в код")}
                            imageSrc="andrey-krishtal.jpg"
                            description={i18n.__("В мире хайпа среди ICO проектов, этот является самым технологически интересным, ибо нет пустых обещаний и кучи рассказов про невозможные имплементации технологий в проект. Однозначно, мой единственный фаворит в мире ICO!")}
                            socialLinks={{
                                facebook: 'https://www.facebook.com/andrew.kryshtal'
                            }}
                        />

                        <Adviser
                            name="Max Krupyshev"
                            role={i18n.__("Считает деньги")}
                            imageSrc="max-krupyshev.jpg"
                            description={i18n.__("Я, как один из ранних участников крипто индустрии, уверен что проект НаХату будет успешным. Это один из немногих примеров успешного применения Блокчейна, уступающий разве что проекту CryptoKitties.")}
                            socialLinks={{
                                facebook: 'https://www.facebook.com/LogZz.kieff'
                            }}
                        />

                        <Adviser
                            name="Igor Pertsiya"
                            role={i18n.__("Контролирует затраты")}
                            imageSrc="igor-pertsiya.jpg"
                            description={i18n.__("Я считаю, что применение технологии блокчейна и организация ICO для покупки Хаты - самое правильное и органичное явление на рынке криптовалют за последнее время, гарантирую, что прослежу, чтобы каждый цент был потрачен на НаХату и бокалы для бара в хате.")}
                            socialLinks={{
                                facebook: 'https://www.facebook.com/igor.pertsiya'
                            }}
                        />

                        <Adviser
                            name="Veroslava Novosilnaya"
                            role={i18n.__("Следит за путешествиями")}
                            imageSrc="veroslava-novosilnaya.jpg"
                            description={i18n.__("Я предпочитаю жить в разных странах мира в сьемных Хатах, но я считаю, что у каждого хорошего человека в Украине должна быть своя Хата. Обязуюсь приложить максимум усилий, чтобы проект НаХату получился успешным.")}
                            socialLinks={{
                                facebook: 'https://www.facebook.com/veroslava.novosilnaya'
                            }}
                        />

                        <Adviser
                            name="David Braun"
                            role={i18n.__("Следит за ремонтом")}
                            imageSrc="david-braun.jpg"
                            description={i18n.__("У меня было много хат, и больших и маленьких. Я делал ремонты с большими и дорогими подрядчиками, пробовал работать бригадами Равшанов и Джамшутов. Сделаю все, что могу, чтобы проект НаХату реализовался максимально эффективно.")}
                            socialLinks={{
                                facebook: 'https://www.facebook.com/david.braun.50951'
                            }}
                        />
                    </div>

                    <p className="partners-about">
                        {i18n.__("Если хотите стать эдвайзером")}, {' '}
                        <a href="#contacts" className="link anchor">{i18n.__("свяжитесь со мной")}</a>, {' '}
                        {i18n.__("посоветуйте что-нибудь как нормальный адвайзер и мы как-нибудь решим этот вопрос.")}
                    </p>
                </div>
            </section>
        )
    }
}