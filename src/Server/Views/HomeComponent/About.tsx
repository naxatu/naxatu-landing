import * as React from 'react';
import * as i18n from 'i18n';
import {sample} from 'lodash';
import {Emojify, emojifyText} from '../../Utils/Emojify';


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

export class About extends React.Component<any, any> {
    renderQuiteEmoji() {
        return <span className="why-quite">🤫</span>;
    }

    render() {

        const {domain} = this.props;
        const telegram = domain.social.telegram;

        return (
            <section className="section -why why" id="about">
                <div className="section-content">
                    <div className="topic">
                        <h2 className="topic-title">
                            {i18n.__("Это краудфандинг на Хату в блокчейне, а не то, что вы подумали")}
                        </h2>
                    </div>

                    <article className="why-article">
                        <label className="why-article-icon">{sample(blockchainIcons)}</label>

                        <h3 className="why-article-title">{i18n.__("Блокчейн — это круто")}</h3>
                        <p className="why-article-text paragraph">
                            {i18n.__("Но хочу, чтобы не так, как у всех! Так что новых блокчейн технологий тут не будет")}{' '}
                            <Emojify>:smiling_imp:</Emojify>
                        </p>
                        <p className="why-article-text paragraph">
                            {i18n.__("Будут токены ХАТА. Они на блокчейне и их уже можно хранить, передавать и продавать друг другу")}
                            <Emojify>:moneybag:</Emojify> ({i18n.__("но это не точно")}).
                        </p>
                        <p className="why-article-text paragraph">
                            {i18n.__("Если достигну цели, то напичкаю хату всякими приблудами, начиная от «умного дома», и заставлю работать робота-пылесоса. Но не факт, что и там где-нибудь будет блокчейн.")}
                        </p>
                    </article>

                    <article className="why-article">

                        <label className="why-article-icon">
                            <i className="fas fa-star"/>
                        </label>

                        <h3 className="why-article-title">{i18n.__("Это действительно честное ICO")}</h3>
                        <p className="paragraph why-article-text"
                           dangerouslySetInnerHTML={{__html: emojifyText(i18n.__("Очень многие проекты в ICO и на Kickstarter обманывают :sob:, обещают золотые горы :moneybag: и очень крутой продукт :sunglasses:, а как соберут средства — исчезнут и накупят <s>Ferrari</s> Lamborghini :car: или еще чего бесполезного."))}}
                        />

                        <p className="paragraph why-article-text">
                            <span
                                dangerouslySetInnerHTML={{__html: emojifyText(i18n.__("Я же не хочу ни кого обманывать и покупать <s>Ferrari</s> Lamborghini :car:. Все собранные средства будут потрачены мне на покупку крутой хаты в Киеве и её ремонт."))}}
                            />{' '}
                            {/*<span>{i18n.__("Возможно в ЖК RYBALSKY.")}</span>*/}
                        </p>
                        <p className="paragraph why-article-text">
                            {i18n.__("Все события будут транслироваться в канале в Telegram")} {' '}
                            <a href={`https://t.me/${telegram}`} target="_blank" className="link">t.me/{telegram}</a>.
                        </p>
                    </article>

                    <article className="why-article">
                        <label className="why-article-icon">{sample(houseIcons)}</label>

                        <h3 className="why-article-title">{i18n.__("Вы получаете токены XATA")}</h3>
                        <p className="paragraph why-article-text">
                            {i18n.__("Возможно, с первого взгляда XATA-токены покажутся бесполезными.")}{' '}
                            {i18n.__("Вы можете свободно переводить и хранить XATA.")}{' '}
                            {i18n.__("А что еще надо для токена, что бы он рос в цене?")}
                        </p>
                        <p className="paragraph why-article-text">
                            {i18n.__("Самый крупный бэкер будет приглашен на прекрасный ужин с владельцами в новой Хате.")}
                            <br/><br/>
                            {i18n.__("Но, пока это секрет…")} {this.renderQuiteEmoji()}
                        </p>
                        <p className="why-article-text -about">
                            <a href="#xata" className="anchor link">{i18n.__("Подробнее о ХАТА токенах")}</a>
                        </p>
                    </article>

                </div>
            </section>
        )
    }
}