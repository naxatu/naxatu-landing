import * as React from 'react';
import {renderToString} from 'react-dom/server';

export class ViewRenderer {
    constructor(protected readonly component: any) {
    }

    render(): string {
        return "<!DOCTYPE html>" + renderToString(this.component);
    }
}