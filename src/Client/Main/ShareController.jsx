import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ShareComponent} from './ShareComponent';

export function init() {
    let shareComponent = document.getElementById("ShareComponent");

    if (shareComponent) {
        ReactDOM.render(<ShareComponent />, shareComponent);
    }
}