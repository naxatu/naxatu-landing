import * as path from 'path';
import * as fs from 'fs';
import * as React from 'react';

export interface IMainLayoutProps {
    title?: string
}

const criticalCSS = fs.readFileSync(
    path.resolve(__dirname, '../../../public/css/critical.css'),
    'utf-8'
);

export class MainLayout extends React.Component<IMainLayoutProps, any> {
    render() {
        const {
            title = 'Title',
            children
        } = this.props;

        return (
            <html lang="ru">
            <head>
                <title>{title}</title>
                <style dangerouslySetInnerHTML={{__html: criticalCSS}}/>
            </head>
            <body>{children}</body>
            </html>
        )
    }
}