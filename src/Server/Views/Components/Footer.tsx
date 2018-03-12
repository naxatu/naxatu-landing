import * as React from 'react';

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
                        Данный проект был разработан в целях шутки. Приношу извинения всем, чьи
                        чувства задел этот текст.<br/>
                        Если есть какие-либо замечения - пожалуйста, сообщите мне.
                    </p>
                    <p className="footer-paragraph">
                        Ethereum, собранный в процессе ICO действительно будет потрачен на покупку
                        или аренду места жительства и возврату не подлежит.
                    </p>
                    <p className="footer-paragraph">naxatu.com @ {version}</p>
                </section>
            </footer>
        )
    }
}
