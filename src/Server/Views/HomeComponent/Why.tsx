import * as React from 'react';
import {sample} from 'lodash';
import {Emojify} from '../../Utils/Emojify';


const blockchainIcons = [
    <i className="fab fa-empire"/>,
    <i className="fab fa-rebel"/>
];

const houseIcons = [
    <i className="fas fa-home"/>,
    <i className="fab fa-fort-awesome"/>,
    <i className="fas fa-globe"/>,
    <i className="fas fa-warehouse"/>
];

export class Why extends React.Component {
    renderQuiteEmoji() {
        return <span className="why-quite">🤫</span>;
    }

    render() {

        return (
            <section className="section -why why" id="why">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">Почему краутфандинг на Хату в блокчейне имеет смысл?</h2>
                    </div>

                    <article className="why-article">

                        <label className="why-article-icon">
                            <i className="fas fa-star"/>
                        </label>

                        <h3 className="why-article-title"><Emojify>Это самое честное ICO :yum:</Emojify></h3>
                        <p className="why-article-text">
                            <Emojify>
                                Очень многие проекты в ICO и на Kickstarter обманывают :sob:, обещают золотые горы и
                                очень крутой продукт :scream:, а как соберут средства - исчезнут и накупят
                                Ferrari :car: или еще чего бесполезного.
                            </Emojify>
                        </p>
                        <p className="why-article-text">
                            <Emojify>
                                Я же не хочу ни кого обманывать и покупать Ferrari :car:. Все собранные средства
                                будут потрачены исключительно на покупку крутой Хаты в Киеве и её крутой ремонт.
                            </Emojify>
                        </p>
                        <p className="why-article-text">
                            Все события будут транслироваться в канале
                            в телеграмме <a href="https://t.me/naxatu" target="_blank" className="link">t.me/naxatu</a>.
                        </p>
                    </article>

                    <article className="why-article">
                        <label className="why-article-icon">
                            {sample(houseIcons)}
                        </label>

                        <h3 className="why-article-title">Вы получаете токены XATA</h3>
                        <p className="why-article-text">
                            <Emojify>
                                Возможно, с первого взгляда, токены XATA покажутся бесполезными. Но уверяю, если дело
                                выгорит - после окончания "Собираю на Хату", будет запущен другой краудсел в реальном
                                секторе :circus_tent: в Киеве. Там можно будет оплачивать ХАТА-й.
                            </Emojify>
                        </p>
                        <p className="why-article-text">
                            Но пока это секрет, никому не говори. Тссс… {this.renderQuiteEmoji()}
                        </p>
                        <p className="why-article-text -about">
                            <a href="#xata" className="anchor link">Подробнее о ХАТА токенах</a>
                        </p>
                    </article>


                    <article className="why-article">
                        <label className="why-article-icon">{sample(blockchainIcons)}</label>

                        <h3 className="why-article-title">Блокчейн это круто</h3>
                        <p className="why-article-text"><Emojify>Но блокчейна тут не будет :smiling_imp:</Emojify></p>
                        <p className="why-article-text">
                            <Emojify>
                                Будут токены ХАТА. Они на блокчейне и ими можно будет что-то платить или куда-то
                                продать :moneybag:. Но это не точно.
                            </Emojify>
                        </p>
                        <p className="why-article-text">
                            Если достигну цели, то напичкаю Хату всякими приблудами от "умного дома" и заставлю
                            работать робота-пылесоса. Но не факт что и там где-нибудь будет блокчейн.
                        </p>
                        <p className="why-article-text">
                            Так-же токены можно получить на <a href="#chalange" className="anchor link">#челендже</a>
                        </p>
                    </article>
                </div>
            </section>
        )
    }
}