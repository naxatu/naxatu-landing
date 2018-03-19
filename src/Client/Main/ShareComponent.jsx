import * as React from 'react';
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

    render() {
        const shareUrl = window.location.href;
        const title = document.title;

        const baseProps = {
            url: shareUrl,
            className: "ico-share-item",
            title: title
        };

        return (
            <React.Fragment>

                {/* Facebook */}
                <FacebookShareButton {...baseProps}
                                     beforeOnClick={this.onShareClickEvent('facebook')}
                                     hashtag="#collectingforhut"
                >
                    <FacebookIcon size={32} round={true}/>
                </FacebookShareButton>

                {/* GooglePlus */}
                <GooglePlusShareButton {...baseProps}
                                       beforeOnClick={this.onShareClickEvent('google-plus')}>
                    <GooglePlusIcon size={32} round={true}/>
                </GooglePlusShareButton>

                {/* Linkedin */}
                <LinkedinShareButton {...baseProps}
                                     beforeOnClick={this.onShareClickEvent('linkedin')}
                >
                    <LinkedinIcon size={32} round={true}/>
                </LinkedinShareButton>

                {/* Twitter */}
                <TwitterShareButton {...baseProps}
                                    beforeOnClick={this.onShareClickEvent('twitter')}
                                    hashtags={["#collectionforhut", "#ethereum", "#rybalsky"]}
                >
                    <TwitterIcon size={32} round={true}/>
                </TwitterShareButton>

                {/* Telegram */}
                <TelegramShareButton {...baseProps}
                                     beforeOnClick={this.onShareClickEvent('telegram')}>
                    <TelegramIcon size={32} round={true}/>
                </TelegramShareButton>

                {/* Reddit */}
                <RedditShareButton {...baseProps}
                                   beforeOnClick={this.onShareClickEvent('reddit')}
                >
                    <RedditIcon size={32} round={true}/>
                </RedditShareButton>
            </React.Fragment>
        )
    }
}
