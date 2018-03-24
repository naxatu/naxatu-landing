import * as React from 'react';
import {map} from 'lodash';
import * as classNames from 'classnames';
import {IDomainProps, domainList}  from '../../Utils/DomainManager';


export interface IHeaderProps {
    lang: string;
    domain: IDomainProps;
}

export class Header extends React.Component<IHeaderProps, any> {

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
        return (
            <header className="header">
                <div className="header-container">
                    {this.renderLanguages()}

                    <button className="header__nav-open __js_navigation-open">
                        <span className="header__nav-open-line"/>
                        <span className="header__nav-open-line"/>
                        <span className="header__nav-open-line"/>
                    </button>
                </div>
            </header>
        )
    }
}