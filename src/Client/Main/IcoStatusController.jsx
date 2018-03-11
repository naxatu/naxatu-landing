import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Numeral from 'numeral';
import {IcoStatusComponent} from './IcoStatusComponent';
import {contract} from './ContractAddress';

import {extractValue} from './TokenStats';

export function init() {
    let icoStatusComponent = document.getElementById("IcoReactComponent");

    extractValue().then((status) => {
        if (icoStatusComponent) {
            ReactDOM.render(<IcoStatusComponent status={status} contract={contract}/>, icoStatusComponent);
        }
    });

}