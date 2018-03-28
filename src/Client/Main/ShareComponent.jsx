import * as React from 'react';
import * as qs from 'querystring';
import {sendGAEvent} from './AnalyticsHelper'

import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    RedditShareButton,

    FacebookIcon,
    GooglePlusIcon,
    TwitterIcon,
    TelegramIcon,
    LinkedinIcon,
    RedditIcon
} from 'react-share';

export class ShareComponent extends React.Component {
    onShareClickEvent = (alias) => {
        return () => {
            sendGAEvent('share', 'open', alias);
        };
    };

    generateShareProps = (alias) => {
        const title = document.title;
        const shareUrl = window.location.href;

        const utm = qs.stringify({
            utm_campaign: 'social',
            utm_medium: 'sharing',
            utm_source: alias
        });

        return {
            url: shareUrl + '?' + utm,
            className: "share-item",
            title: title,
            beforeOnClick: this.onShareClickEvent(alias)
        };
    };

    render() {
        const title = document.title;

        return (
            <React.Fragment>
                {/* GooglePlus */}
                <GooglePlusShareButton {...this.generateShareProps('google-plus')}>
                    <GooglePlusIcon size={32} round={true}/>
                </GooglePlusShareButton>

                {/* Linkedin */}
                <LinkedinShareButton {...this.generateShareProps('linkedin')}>
                    <LinkedinIcon size={32} round={true}/>
                </LinkedinShareButton>

                {/* Twitter */}
                <TwitterShareButton {...this.generateShareProps('twitter')}
                                    hashtags={["collectionforhut", "ethereum", "rybalsky", "ico"]}
                >
                    <TwitterIcon size={32} round={true}/>
                </TwitterShareButton>

                {/* Telegram */}
                <TelegramShareButton {...this.generateShareProps('telegram')}>
                    <TelegramIcon size={32} round={true}/>
                </TelegramShareButton>

                {/* Reddit */}
                <RedditShareButton {...this.generateShareProps('reddit')}>
                    <RedditIcon size={32} round={true}/>
                </RedditShareButton>
            </React.Fragment>
        )
    }
}
