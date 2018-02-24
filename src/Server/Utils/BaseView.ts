import * as React from 'react';
import {renderToString} from 'react-dom/server';
import {template} from './Template';

export interface IInitState<P extends object> {
    props?: P;
}

export abstract class BaseView<T extends IInitState<object>, C extends React.ComponentClass> {
    private title: string;
    private initState: T;
    private chunks: string[];

    /**
     * @param {string} title
     * @param {string[]} chunks
     * @param {T} initState
     */
    public constructor(title: string, chunks: string[], initState: T) {
        this.title = title;
        this.chunks = chunks;
        this.initState = initState;
    }

    /**
     * @returns {string}
     */
    public render(): string {
        const {props = {}} = this.initState;
        const appString = renderToString(React.createElement(this.getComponent(), props));

        return template({
            body: appString,
            title: this.title,
            initState: this.initState,
            chunks: this.chunks,
        });
    }

    protected abstract getComponent(): C;
}
