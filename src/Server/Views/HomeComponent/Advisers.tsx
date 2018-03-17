import * as React from 'react';
import {Adviser} from './SmallElements/Adviser';
import {Emojify} from '../../Utils/Emojify';

export class Advisers extends React.Component<any, any> {
    render() {
        return (
            <section className="section -advisers advisers" id="advisers">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">Advisers</h2>
                        <p className="topic-desc">
                            Едвайзеры призваны торговать своим лицом. Но все же, встречаются специалисты,
                            что понимают в сфере строительства и ремонта, и могут дать полезные советы. Ага...
                        </p>
                    </div>

                    <div className="adviser-list">
                        <Adviser
                            name="David Braun"
                            role="Следит за ремонтом"
                            imageSrc="david-braun.png"
                            description={
                                "У меня было было много хат, и больших и маленьких. Я делал ремонты " +
                                "с большими и дорогими подрядчиками, пробывал работать бригадами " +
                                "Равшанов и Джамшутов. Сделаю все что могу, что бы проект НаХату " +
                                "реализовался максимально эффективно"
                            }
                            socialLinks={{
                                facebook: 'https://www.facebook.com/david.braun.50951'
                            }}
                        />

                        <Adviser
                            name="Igor Pertsiya"
                            role="Контролирует затраты"
                            imageSrc="igor-pertsiya.png"
                            description={
                                "Я считаю, что применение технологии блокчейна и организация " +
                                "ICO для покупки Хаты  - самое правильное и органичное явление " +
                                "на рынке криптовалют за последнее время, гарантирую, что прослежу, " +
                                "чтобы каждый цент был потрачен на НаХату и бокалы для бара в хате."
                            }
                            socialLinks={{
                                facebook: 'https://www.facebook.com/igor.pertsiya'
                            }}
                        />

                        <Adviser
                            name="Veroslava Novosilnaya"
                            role="Следит за путешествиями"
                            imageSrc="veroslava-novosilnaya.png"
                            description={
                                "Я предпочитаю жить в разных странах мира в сьемных Хатах, но я считаю " +
                                "что у каждого хорошего человека в Украине должна быть своя Хата. " +
                                "Обязуюсь приложить максимум усилий, чтобы проект НаХату получился успешным"
                            }
                            socialLinks={{
                                facebook: 'https://www.facebook.com/veroslava.novosilnaya'
                            }}
                        />

                        <Adviser
                            name="Andrey Krishtal"
                            role="Смотрит в код"
                            imageSrc="andrey-krishtal.png"
                            description={
                                "В мире хайпа среди ICO проектов, этот является самым технологически " +
                                "интересным, ибо нет пустых обещаний и кучи рассказов про невозможные " +
                                "имплементации технологий в проект. Однозначно, мой единственный " +
                                "фаворит в мире ICO!"
                            }
                            socialLinks={{
                                facebook: 'https://www.facebook.com/andrew.kryshtal'
                            }}
                        />
                    </div>

                    <p className="partners-about">
                        Если хотите стать эдвайзером, {' '}
                        <a href="#contacts" className="link anchor">свяжитесь со мной</a>,
                        посоветуйте что-нибудь, как нормальный aдвайзер, и мы как-нибудь решим этот вопрос.
                    </p>
                </div>
            </section>
        )
    }
}