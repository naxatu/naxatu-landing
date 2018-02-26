import * as React from 'react';
const NodeEmoji = require('node-emoji');

export class Emojify extends React.Component<any, any> {
    render() {
        const {children} = this.props;

        if (typeof children === 'string') {
            return emojifyText(children as string);
        }

        return children;
    }
}

export function emojifyText(text: string = ''): string {
    return NodeEmoji.emojify(text);
}