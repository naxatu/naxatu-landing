import * as React from 'react';
import * as i18n from "i18n";
import {IDomainProps}  from '../../Utils/DomainManager';
import {FacebookButton} from './Facebook';

export interface IFooterProps {
    version: string;
    lang: string;
    domain: IDomainProps;
}

export class Footer extends React.Component<IFooterProps, any> {
    render() {
        const {version, domain} = this.props;

        const {telegram, facebook, github, reddit} = domain.social;

        return (
            <footer className="footer section">
                <section className="section-content">
                    <p className="footer-paragraph">
                        {i18n.__("Приношу извинения всем, чьи чувства задел этот текст.")}<br/>
                        {i18n.__("Если есть какие-либо замечения - пожалуйста, сообщите мне.")}
                    </p>
                    <p className="footer-paragraph">
                        {i18n.__("Ethereum, собранный в процессе ICO, действительно будет потрачен на покупку или аренду места жительства, и возврату не подлежит.")}
                    </p>
                    <p className="footer-paragraph">2018 - naxatu.com @ {version}</p>
                </section>


                <section className="footer-banner __js_footer-banner">
                    <div className="footer-banner-content">
                        <div className="footer-banner-links">
                            <a href={`https://t.me/${telegram}`}
                               target="_blank"
                               title="All in Telegram channel"
                            ><i className="fab fa-telegram"/></a>

                            <a href={`https://fb.me/${facebook}`}
                               target="_blank"
                               title="Facebook"
                            ><i className="fab fa-facebook"/></a>

                            <a href={`https://github.com/${github}`}
                               target="_blank"
                               title="GitHub"
                            ><i className="fab fa-github"/></a>

                            <a href={`https://www.reddit.com${reddit}`}
                               target="_blank"
                               title="Reddit conversation"
                            ><i className="fab fa-reddit"/></a>

                            <a href={`https://bitcointalk.org/index.php?topic=3180924.0`}
                               target="_blank"
                               title="BitcoinTalk"
                            ><i className="fab fa-bitcoin"/></a>

                            <FacebookButton url={domain.url}/>
                        </div>

                        <a href="#ico" className="link anchor">{i18n.__('Дать ему')} →</a>
                    </div>
                </section>
            </footer>
        )
    }
}
