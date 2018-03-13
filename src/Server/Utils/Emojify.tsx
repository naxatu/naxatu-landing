import {map} from 'lodash';
import * as React from 'react';
const NodeEmoji = require('node-emoji');

export class Emojify extends React.Component<any, any> {

    renderNode = (node: any) => {
        if (typeof node === 'string') {
            return emojifyText(node as string);
        }

        return node;
    };

    render() {
        const {children} = this.props;

        if (Array.isArray(children)) {
            return map(children, this.renderNode);
        }

        return this.renderNode(children);
    }
}

export function emojifyText(text: string = ''): string {
    return NodeEmoji.emojify(text);
}