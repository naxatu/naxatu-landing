import * as React from 'react';

const scriptConent = `(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=427230134404340&autoLogAppEvents=1';
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));`;

export class FacebookConnector extends React.Component<any, any> {
    render() {
        return (<React.Fragment>
            <div id="fb-root"/>
            <script dangerouslySetInnerHTML={{__html: scriptConent}}/>
        </React.Fragment>)
    }
}

export interface FacebookButtonProps {
    url: string;
}

export class FacebookButton extends React.Component<FacebookButtonProps, any> {
    render() {

        const {url} = this.props;

        const buttonProps = {
            className: "fb-like",
            "data-href": url,
            "data-width": "150",
            "data-layout": "button_count",
            "data-action": "like",
            "data-size": "small",
            "data-show-faces": "false",
            "data-share": "true"
        };

        return (<div {...buttonProps}/>)
    }
}