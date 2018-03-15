import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {sendGAEvent} from './AnalyticsHelper';
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

    let onCopyContractAddress = () => {
        document.getElementById('contract-address').select();
        document.execCommand("Copy");
        
        sendGAEvent('contract', 'copy');
    };

    document.getElementsByClassName('__js-copy-contract')[0].addEventListener('click', onCopyContractAddress);
}