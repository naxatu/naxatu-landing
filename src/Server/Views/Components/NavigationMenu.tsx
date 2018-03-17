import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps {
}

export class NavigationMenu extends React.Component<IProps, any> {
    render() {
        return <div className="navigation" id="page-navigation">
            <button className="navigation-open">
                <span className="navigation-open__line"/>
                <span className="navigation-open__line"/>
                <span className="navigation-open__line"/>
            </button>
            <div className="navigation-overlay"/>

            <nav className="navigation-wrapper">

                <img src="/image/logo-white.svg" className="navigation-logo" title="Собираю на Хату" alt="На Хату"/>

                <button className="navigation-close">
                    <span className="navigation-close__line"/>
                    <span className="navigation-close__line"/>
                </button>

                <div className="navigation-content">
                    <ul className="navigation-menu">
                        <li className="navigation-item -main-action">
                            <a className="anchor" href="#ico">Подкинуть на Хату</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#about">О проекте</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#rybalsky">Rybalsky</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#xata">О токенах XATA</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#roadmap">Roadmap</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#team">Команда мечты</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#team">Партнеры</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#advisers">Advisers</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#challenge">#собираюнахату</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#heroes">Герои</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#faq">FAQ</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#contacts">Как связаться</a>
                        </li>
                    </ul>

                    <div className="navigation-footer">
                        <p className="navigation-footer__desc">
                            Я готов потратить все ваши деньги себе на хату.
                            А вы готовы мне их дать?
                        </p>
                        <div className="navigation-footer__links">
                            <a href="https://github.com/naxatu" target="_blank"
                               title="Ты всю жизнь ждал, что бы с умным видом смотреть в чужой код и критиковать. Сделай это прямо сейчас!"
                            ><i className="fab fa-github"/></a>

                            <a href="https://t.me/naxatu" target="_blank"
                               title="Следи за всем что проиходит, ведь нужно быть в курсе событий."
                            ><i className="fab fa-telegram"/></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>;
    }
}