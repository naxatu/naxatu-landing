import * as React from 'react';

export interface IPartnerProps {
    href: string;
    title?: string;
    partnerEventKey?: string;

    imageSrc: string;
    imageAlt?: string;
    imageTitle?: string;
}

export class Partner extends React.Component<IPartnerProps, any> {
    render() {
        const {
            href,
            title,
            partnerEventKey,
            imageSrc,
            imageAlt,
            imageTitle
        } = this.props;

        return (
            <a href={`${href}?src=naxatu.com`}
               className="partners-item __js-partner"
               partner-event-key={partnerEventKey}
               title={title}
               target="_blank"
               rel="nofollow"
            >
                <img src={"/image/partners/" + imageSrc}
                     alt={imageAlt}
                     className="partners-item__image"
                     title={imageTitle || title}
                />
            </a>
        )
    }
}
