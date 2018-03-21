import * as React from 'react';
import {map} from 'lodash';
import * as i18n from "i18n";
import {IDomainProps, domainList}  from '../../Utils/DomainManager';
import * as classNames from 'classnames';

export interface IProps {
    lang: string;
    domain: IDomainProps;
}

export class NavigationMenu extends React.Component<IProps, any> {

    renderLanguages() {
        const {lang} = this.props;

        return <div className="lang-selector">
            {map(domainList, (domain: IDomainProps) => {
                const elementProps = {
                    href: domain.url,
                    className: classNames("lang-selector__item", (domain.language === lang) && '-active')
                };

                return <a {...elementProps}>{domain.language}</a>
            })}
        </div>
    }

    render() {

        const {domain} = this.props;

        return <div className="navigation" id="page-navigation">

            {this.renderLanguages()}

            <button className="navigation-open">
                <span className="navigation-open__line"/>
                <span className="navigation-open__line"/>
                <span className="navigation-open__line"/>
            </button>
            <div className="navigation-overlay"/>

            <nav className="navigation-wrapper">

                <img src="/image/logo-white.svg" className="navigation-logo"
                     title={i18n.__("Собираю на Хату")} alt={i18n.__("На Хату")}/>

                <button className="navigation-close">
                    <span className="navigation-close__line"/>
                    <span className="navigation-close__line"/>
                </button>

                <div className="navigation-content">
                    <ul className="navigation-menu">
                        <li className="navigation-item -main-action">
                            <a className="anchor" href="#ico">{i18n.__("Подкинуть на Хату")}</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#about">{i18n.__("О проекте")}</a>
                        </li>

                        {/*<li className="navigation-item">*/}
                        {/*<a className="anchor" href="#rybalsky">Rybalsky</a>*/}
                        {/*</li>*/}

                        <li className="navigation-item">
                            <a className="anchor" href="#xata">{i18n.__("О токенах XATA")}</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#roadmap">Roadmap</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#team">{i18n.__("Команда мечты")}</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#advisers">Advisers</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#team">{i18n.__("Партнеры")}</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#heroes">{i18n.__("Герои")}</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#faq">FAQ</a>
                        </li>

                        <li className="navigation-item">
                            <a className="anchor" href="#contacts">{i18n.__("Как связаться")}</a>
                        </li>
                    </ul>

                    <div className="navigation-footer">
                        <p className="navigation-footer__desc">
                            {i18n.__("Я готов потратить все ваши деньги себе на хату. А вы готовы мне их дать?")}
                        </p>
                        <div className="navigation-footer__links">
                            <a href="https://github.com/naxatu" target="_blank"
                               title={i18n.__("Ты всю жизнь ждал, что бы с умным видом смотреть в чужой код и критиковать. Сделай это прямо сейчас!")}
                            ><i className="fab fa-github"/></a>

                            <a href={`https://t.me/${domain.social.telegram}`} target="_blank"
                               title={i18n.__("Следи за всем что проиходит, ведь нужно быть в курсе событий.")}
                            ><i className="fab fa-telegram"/></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>;
    }
}