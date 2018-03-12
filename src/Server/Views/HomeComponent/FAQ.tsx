import * as React from 'react';
import {Emojify} from '../../Utils/Emojify';

export class FAQ extends React.Component<any, any> {
    render() {
        return (
            <section className="section -faq faq" id="faq">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">Часто задаваемые</h2>
                    </div>

                    <div className="faq-block">
                        <article className="faq-item">
                            <h3 className="faq-item__title">Это либо тупая шутка, либо скам!</h3>
                            <p className="paragraph faq-item__answer">
                                Ни в коем случае. Все по-настоящему и на 100% прозрачно.
                                Никто никого не обманывает &mdash; все собранные деньги будут потрачены мне на
                                квартиру в ЖК Rybalsky.
                                <br/><br/>
                                Даже есть трансляция происходящего в Telegram &mdash; {' '}
                                <a href="https://t.me/naxatu" className="link" target="_blank">t.me/naxatu</a>.
                            </p>
                        </article>

                        <article className="faq-item">
                            <h3 className="faq-item__title">Будет ли XATA торговаться?</h3>
                            <p className="paragraph faq-item__answer">
                                Я надеюсь на это, очень надеюсь. Возможно в будущем,
                                вы сможете использовать XATA для кое-чего интересного
                                (только для взрослых <Emojify>:beer:</Emojify> и #ноэтонеточно).
                            </p>
                        </article>

                        <article className="faq-item">
                            <h3 className="faq-item__title">
                                Почему бы просто не заработать на хату, как это делают все нормальные люди?
                            </h3>
                            <p className="paragraph faq-item__answer">
                                Во-первых, мне как программисту зарабатывать нужно около 12 лет.<br/>
                                Во-вторых, ICO &mdash; это интересней и ставит перед тобой целый челендж.<br/>
                                К тому же, организация ICO, это тоже работа, требущая внимания к деталям,
                                слаженной работы, хорошей команды:
                                <br/><br/>
                                Маркетинг и социальный маркетинг, дизайн, брендинг, проработка текстов и концепции,
                                Блокчейн (Solidity), Front-End и Back-end разработка.
                            </p>
                        </article>

                        <article className="faq-item">
                            <h3 className="faq-item__title">Чего ты хочешь этим достичь?</h3>
                            <p className="paragraph faq-item__answer">
                                Хаты. Реально хочу купить квартиру. За ваш Ethereum, нажитый «тяжким»
                                трудом инвестора и трейдера.
                                <br/><br/>
                                Но также, я хочу показать, что с помощью ICO и краудфандинга можно
                                не только нагло отбирать у людей деньги, заставляя их верить в нереализуемые проекты,
                                но и воплощать мечты, какими бы глупыми они не были.
                                Криптовалютный бум привлекает все больше и больше людей
                                в поиске наживы и с этим нужно бороться.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        )
    }
}