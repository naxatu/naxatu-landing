import {Dictionary, map} from 'lodash';
import * as React from 'react';

export interface IAdviserProps {
    name: string;
    role: string;
    description: string;
    imageSrc: string;
    imageAlt?: string;
    imageTitle?: string;
    socialLinks?: Dictionary<string>;
}

const socialLinksPatterns: Dictionary<any> = {
    facebook: (url: string) => {
        return (
            <a key="facebook" href={url} className="adviser-item__social-icon" target="_blank" rel="nofollow">
                <i className="fab fa-facebook-square"/>
            </a>
        );
    }
};

export class Adviser extends React.Component<IAdviserProps, any> {
    render() {
        const {
            name,
            role,
            description,
            imageSrc,
            imageAlt,
            imageTitle,
            socialLinks = {}
        } = this.props;

        return (
            <article className="adviser-item">
                <img src={"/image/advisers/" + imageSrc}
                     className="adviser-item__image"
                     alt={imageAlt ? imageAlt : name}
                     title={imageTitle ? imageTitle : name}
                />
                <h3 className="adviser-item__name">{name}</h3>
                <p className="adviser-item__role">{role}</p>
                <div className="adviser-item__social">
                    {map(socialLinks, (url, key) => socialLinksPatterns[key](url))}
                </div>
                <p className="adviser-item__description">{description}</p>
            </article>
        );
    }
}
