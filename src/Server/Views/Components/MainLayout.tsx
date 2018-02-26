import * as path from 'path';
import * as fs from 'fs';
import * as React from 'react';
import {GTM} from '../../Utils/GTM';
import {Emojify, emojifyText} from '../../Utils/Emojify';
import {config} from '../../Config';

const version = config.get('app.version') || '0.0.0';

export interface IMainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string[];
}

const criticalCSS = fs.readFileSync(
    path.resolve(__dirname, '../../../public/css/critical.css'),
    'utf-8'
);

const gtm = new GTM('GTM-NWXJK3K');

export class MainLayout extends React.Component<IMainLayoutProps, any> {
    render() {
        const {
            title = 'Title',
            description = '',
            keywords = [],
            children
        } = this.props;

        const mainCssAttribute = {
            href: "/css/main.css?v=" + version,
            async: true,
            rel: "stylesheet",
            type: "text/css"
        };

        return (
            <html lang="ru">
            <head>
                <meta httpEquiv="Content-type" content="text/html; charset=utf-8"/>
                <meta name="Content-language" content="ru"/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta name="format-detection" content="telephone=no"/>
                <title>{emojifyText(title)}</title>
                <meta name="keywords" content={emojifyText(keywords.join(', '))}/>
                <meta name="description" content={emojifyText(description)}/>
                <style dangerouslySetInnerHTML={{__html: criticalCSS}}/>
                <link {...mainCssAttribute} />
                {gtm.renderHead()}
            </head>
            <body>
            {gtm.renderBody()}
            {children}
            <script src={`/js/main.bundle.js?v=${version}`}/>
            </body>
            </html>
        )
    }
}