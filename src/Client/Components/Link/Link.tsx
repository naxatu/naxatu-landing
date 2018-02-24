import * as React from 'react';
import * as classnames from 'classnames';

export interface ILinkProps {
    children: React.ReactNode;
    key?: string;
    href?: string;
    className?: string;
    title?: string;
}

export function Link(props: ILinkProps): JSX.Element {
    const {
        className,
        children,
        key,
        title,
        href = '#',
    } = props;

    return (
        <a
            rel="noopener"
            className={ classnames('link', className) }
            title={ title }
            href={ href }
            key={ key }
        >
            { children }
        </a>
    );
}
