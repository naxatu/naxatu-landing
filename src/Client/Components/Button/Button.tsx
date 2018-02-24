import * as React from 'react';
import * as classnames from 'classnames';

export interface IButtonProps {
    className?: string;
    children: string;
}

export function Button(props: IButtonProps): JSX.Element {
    const {className, children} = props;
    return (
        <button className={classnames('button', className)}>
            {children}
        </button>
    );
}
