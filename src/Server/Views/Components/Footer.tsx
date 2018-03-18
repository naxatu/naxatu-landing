import * as React from 'react';
import * as i18n from "i18n";

export interface IFooterProps {
    version: string;
}

export class Footer extends React.Component<IFooterProps, any> {
    render() {
        const {version} = this.props;
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
            </footer>
        )
    }
}
