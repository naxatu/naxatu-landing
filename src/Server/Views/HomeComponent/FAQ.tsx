import * as React from 'react';
import {Emojify} from '../../Utils/Emojify';

export class FAQ extends React.Component<any, any> {
    render() {
        return (
            <section className="section -faq faq" id="faq">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">Вопросики</h2>
                    </div>

                    <div className="faq-block">
                        <article className="faq-item">
                            <h3 className="faq-item__title">Это либо тупая шутка, либо скам!</h3>
                            <p className="paragraph faq-item__answer">
                                Ни в коем случае. Все по настоящему и на 100% прозрачно.
                                Ни кто, ни кого не обманывает - все собранные деньги будут
                                понтрачены мне на квартиру в ЖК Rybalsky.
                                <br/><br/>
                                Даже есть трансляция происходящего в телеграме - {' '}
                                <a href="https://t.me/naxatu" className="link" target="_blank">t.me/naxatu</a>.
                            </p>
                        </article>

                        <article className="faq-item">
                            <h3 className="faq-item__title">Будет ли XATA торговаться?</h3>
                            <p className="paragraph faq-item__answer">
                                Я надеюсь на это, очень надеюсь. В любом случае, в будущем,
                                вы сможете использовать XATA для кое чего интересного
                                (только для взрослых <Emojify>:beer:</Emojify>).
                            </p>
                        </article>

                        <article className="faq-item">
                            <h3 className="faq-item__title">Будет ли еще возможность купить XATA?</h3>
                            <p className="paragraph faq-item__answer">
                                Отличный вопрос! Во-первых - нафиг тебе этот токен нужен?
                                <br/><br/>
                                Если это ICO не позволит собрать достаточно денег для одной Хаты,
                                то я буду продолжать и продолжать запускать его, пока не достигну
                                поставленного результата.
                                <br/><br/>
                                <i>Вот это ты себе накупишь XATA.</i>
                            </p>
                        </article>

                        <article className="faq-item">
                            <h3 className="faq-item__title">
                                Почему бы просто не заработать на Хату, как это делают все нормальные люди?
                            </h3>
                            <p className="paragraph faq-item__answer">
                                Во-первых, мне как программисту зарабатывать нужно около 12 лет.<br/>
                                Во-вторых ICO - это интересней и ставит перед тобой целый челендж.<br/>
                                К тому же, организация ICO, это та-же работа, требущая внимания к деталям,
                                слаженной работы, хорошей команды:
                                <br/><br/>
                                Маркетинг и социальный маркетинг, дизайн, брендинг, проработка текстов и концепции,
                                Блокчейн (Solidity), Front-End и Back-end разработка.
                            </p>
                        </article>

                        <article className="faq-item">
                            <h3 className="faq-item__title">
                                Чего ты хочешь этим достичь?
                            </h3>
                            <p className="paragraph faq-item__answer">
                                Хаты. Реально хочу купить квартиру и куплю её. За ваш Ethereum,
                                нажитый «тяжким» трудом инвестора.
                                <br/><br/>
                                Но так-же, я хочу показать, что с помощью ICO и краутфандинга можно
                                не только нагло отбирать у людей деньги, заставляя их верить в нерелизуемый проект.
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