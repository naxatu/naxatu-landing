import * as React from 'react';
import * as i18n from 'i18n';
import {Emojify} from '../../Utils/Emojify';

export class Contacts extends React.Component<any, any> {
    render() {
        return (
            <section className="section -contacts contacts" id="contacts">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">{i18n.__("Как связаться")}</h2>
                        <p className="topic-desc">
                            {i18n.__("Ведь куда в ICO без возможности связаться?")}<br/>
                            {i18n.__("Я хочу хату. Значит, должен быть готов принимать грудью ваши вопросы и всякие предложения. Давайте, дерзайте!")}
                        </p>
                    </div>

                    <div className="contacts-block">
                        <div>
                            <div className="contacts__item">
                                <b><i className="fab fa-telegram-plane"/> Telegram:</b>
                                <a target="_blank" href="https://t.me/MaksymTymchyk"
                                   className="link">t.me/MaksymTymchyk</a>
                            </div>

                            <div className="contacts__item">
                                <b><i className="fab fa-telegram-plane"/> {i18n.__("Telegram канал")}:</b>
                                <a target="_blank" href="https://t.me/naxatu"
                                   className="link">t.me/naxatu</a>
                            </div>

                            <div className="contacts__item">
                                <b><i className="fab fa-facebook"/> Facebook:</b>
                                <a target="_blank" href="https://fb.com/maksym.tymchyk"
                                   className="link">maksym.tymchyk</a>
                            </div>

                            <div className="contacts__item">
                                <b><i className="far fa-envelope"/> Email:</b>
                                <a target="_blank" href="mailto:maksym.tymchyk@gmail.com" className="link">maksym.tymchyk@gmail.com</a>
                            </div>
                        </div>


                        <div>
                            <p>{i18n.__("Хочешь задать вопрос или анонимно высказаться?")}</p>
                            <a href="https://goo.gl/forms/4bbkfDyCvvVKkNY22" className="btn" target="_blank">
                                {i18n.__("Сделай это!")}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}