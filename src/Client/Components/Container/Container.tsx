import * as React from 'react';
import * as classnames from 'classnames';

export interface IContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container(props: IContainerProps): JSX.Element {
    const {className, children} = props;

    return (
        <div className={classnames('container', className)}>
            {children}
        </div>
    );
}
