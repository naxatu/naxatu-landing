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

export class IcoStatusComponent extends React.Component {

    state = {
        loaded: false,
        hasWeb3js: false
    };

    web3js;

    componentDidMount() {
        setTimeout(() => {
            this.setState(() => {
                return {loaded: true};
            });
        }, 100);

        if (typeof web3 !== 'undefined') {
            this.web3js = new Web3(web3.currentProvider);
            this.web3js.version.getNetwork((err, netId) => {
                if (err) return;

                sendGAEvent('metamask', 'exists', netId);
                switch (netId) {
                    case "1":
                        this.setState(() => {
                            return {hasWeb3js: true};
                        });
                        break;

                    default:
                        console.log(netId);
                }
            });
        }
    }

    onShareClickEvent = (alias) => {
        return () => {
            sendGAEvent('share', 'open', alias);
        };
    };

    render() {
        const {contract, status} = this.props;
        const {hasWeb3js} = this.state;

        const shareUrl = window.location.href;

        return (
            <div {...componentProps}>
                <div className="ico-share">
                    <h3 className="ico-share__title">Расскажи всем, что здесь на Хату собирают!</h3>

                    <FacebookShareButton url={shareUrl} className="ico-share-item"
                                         beforeOnClick={this.onShareClickEvent('facebook')}>
                        <FacebookIcon size={32} round={true}/>
                    </FacebookShareButton>

                    <GooglePlusShareButton url={shareUrl} className="ico-share-item"
                                           beforeOnClick={this.onShareClickEvent('google-plus')}>
                        <GooglePlusIcon size={32} round={true}/>
                    </GooglePlusShareButton>

                    <LinkedinShareButton url={shareUrl} className="ico-share-item"
                                         beforeOnClick={this.onShareClickEvent('linkedin')}>
                        <LinkedinIcon size={32} round={true}/>
                    </LinkedinShareButton>

                    <TwitterShareButton url={shareUrl} className="ico-share-item"
                                        beforeOnClick={this.onShareClickEvent('twitter')}>
                        <TwitterIcon size={32} round={true}/>
                    </TwitterShareButton>

                    <TelegramShareButton url={shareUrl} className="ico-share-item"
                                         beforeOnClick={this.onShareClickEvent('telegram')}>
                        <TelegramIcon size={32} round={true}/>
                    </TelegramShareButton>

                    <RedditShareButton url={shareUrl} className="ico-share-item"
                                       beforeOnClick={this.onShareClickEvent('reddit')}>
                        <RedditIcon size={32} round={true}/>
                    </RedditShareButton>
                </div>

            </div>
        )
    }
}
