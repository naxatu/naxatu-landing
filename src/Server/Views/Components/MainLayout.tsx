import * as path from 'path';
import * as fs from 'fs';
import * as React from 'react';
import {GTM} from '../../Utils/GTM';
import {Emojify, emojifyText} from '../../Utils/Emojify';
import {config} from '../../Config';
import {IDomainProps, domainList}  from '../../Utils/DomainManager';

import {OpenGraph} from './OpenGraph';
import {NavigationMenu} from './NavigationMenu';
import {TelegramBox} from './TelegramBox';
import {Footer} from './Footer';

const version = config.get('app.version') || '0.0.0';
const gtmKey = config.get('app.gtmKey') || '';

export interface IMainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string[];
    url: string;
    lang: string;
    domain: IDomainProps
}

const criticalCSS = fs.readFileSync(
    path.resolve(__dirname, '../../../public/css/critical.css'),
    'utf-8'
);

const gtm = new GTM(gtmKey);

export class MainLayout extends React.Component<IMainLayoutProps, any> {
    render() {
        const {
            title = 'Title',
            description = '',
            keywords = [],
            children,
            url = '',
            domain,
            lang
        } = this.props;

        const mainCssAttribute = {
            href: "/css/main.css?v=" + version,
            async: true,
            rel: "stylesheet",
            type: "text/css"
        };

        const openGraphProps = {
            title: emojifyText(title),
            description: emojifyText(description),
            url: url,
            baseHost: domain.url,
            lang: lang
        };

        return (
            <html lang={lang}>
            <head>
                <meta httpEquiv="Content-type" content="text/html; charset=utf-8"/>
                <meta name="Content-language" content={lang}/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta name="format-detection" content="telephone=no"/>
                <title>{emojifyText(title)}</title>
                <meta name="keywords" content={emojifyText(keywords.join(', '))}/>
                <meta name="description" content={emojifyText(description)}/>
                <OpenGraph {...openGraphProps}/>
                <style dangerouslySetInnerHTML={{__html: criticalCSS}}/>
                <link {...mainCssAttribute}/>
                <link rel="shortcut icon" type="image/png" href="/favicon.ico"/>

                {gtm.renderHead()}
            </head>
            <body>
            {gtm.renderBody()}
            <NavigationMenu lang={lang} domain={domain}/>
            <TelegramBox telegram={domain.social.telegram}/>
            {children}
            <Footer version={version}/>
            <script src={`/js/main.bundle.js?v=${version}`}/>
            <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"/>
            </body>
            </html>
        )
    }
}