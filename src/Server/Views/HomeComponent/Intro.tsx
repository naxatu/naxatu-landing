import * as React from 'react';
import * as i18n from "i18n";

export class Intro extends React.Component<any, any> {
    render() {
        return (
            <section className="section -intro intro" id="intro">
                <div className="intro-background">
                    <img src="/image/bg-intro.jpg"
                         className="intro-background__image"
                         alt={i18n.__("Хата")}
                         title={i18n.__("Собираю вот на такую хату")}
                    />
                </div>
                <div className="section-content intro-content">
                    <div className="intro-logo__container">
                        <img src="/image/logo-white.svg"
                             title={i18n.__("Лебедев обзавидуется от такого лого")}
                             alt={i18n.__("Логотип XATA")}
                             className="intro-logo"
                        />
                    </div>

                    <div className="topic intro-topic">
                        <h1 className="topic-title">{i18n.__("Собираю на Хату")}</h1>
                        <h2 className="topic-desc intro-topic-desc">
                            {i18n.__("Каждый мечтает о прекрасном.")}<br/>
                            {i18n.__("Я же мечтаю о хате в Киеве на которую соберу на ICO.")}

                        </h2>
                    </div>

                    <div className="intro-buttons">
                        <a href="#ico"
                           className="button btn -yellow intro-btn -ico anchor"
                           title={i18n.__("Вот нажми и узри, как надо делать ICO!")}
                        >{i18n.__("Подкинуть на Хату")}</a>

                        <a href="#about" className="button btn -inline intro-btn -about anchor">
                            {i18n.__("О том как на Хату собирать")}
                        </a>
                    </div>
                </div>

                <div className="intro-disclaimer">
                    {i18n.__("Серьезно, краудсел на квартиру фиг знает кому, через продажу ERC20 токенов в Ethereum.")}
                    <br/>{i18n.__("Я предупреждал!")} {' '}
                    <a href="#ico"
                       className="anchor link"
                       title={i18n.__("Нажми на эту кнопку и у тебя появиться шанс")}>{i18n.__("Дать ему")} →</a>
                </div>
            </section>
        )
    }
}