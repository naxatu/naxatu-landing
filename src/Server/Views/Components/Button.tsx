import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps {
    className?: any;
    children?: any | JSX.Element | React.Component;
}

export class Button extends React.Component<IProps, any> {
    render() {

        const {className, children} = this.props;

        return <button className={classNames('btn', className)}>{children}</button>;
    }
}