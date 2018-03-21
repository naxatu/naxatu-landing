import * as React from 'react';
import * as i18n from 'i18n';

export interface IOpenGraphProps {
    title?: string;
    description?: string;
    url: string;
    baseHost: string;
    lang: string;
}

export class OpenGraph extends React.Component<IOpenGraphProps, any> {
    render() {

        const {
            title,
            description,
            url,
            baseHost,
            lang
        } = this.props;

        return (
            <React.Fragment>
                {/*<meta name="ICBM" content="50.440878, 30.437546"/>*/}
                {/*<meta property="fb:app_id" content="1736415216605807"/>*/}
                <meta name="geo.region" content="UA-30"/>
                <meta name="geo.placename" content={i18n.__("Киев")}/>
                <meta name="geo.position" content="50.440878;30.437546"/>

                <meta name="twitter:site" content="@MaksymTymchyk"/>
                <meta name="twitter:creator" content="@MaksymTymchyk"/>
                <meta name="twitter:card" content="summary_large_image"/>

                <meta property="og:url" content={url}/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:site_name" content={i18n.__("Собираю на Хату")}/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content={`${baseHost}/image/${lang}/social.png`}/>
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
            </React.Fragment>
        )
    }
}