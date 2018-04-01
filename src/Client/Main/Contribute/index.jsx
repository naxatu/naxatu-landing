import * as React from 'react';
import {each} from 'lodash';
import {sendGAEvent} from '../AnalyticsHelper';
import * as ReactDOM from 'react-dom';
import {ModalComponent} from './ModalComponent';

const contributeButtons = document.getElementsByClassName('__js_contribute');
const contributeModal = document.getElementById('cnt-popup');


const closeButtons = document.getElementsByClassName('__js_close_contribute');


const openModal = (event) => {
    contributeModal.classList.add('-show');
    const key = event.target.getAttribute('contribute-btn-key') || null;

    sendGAEvent('contribute-modal', 'show', key);
};

const closeModal = () => {
    contributeModal.classList.remove('-show');
};

if (contributeModal) {
    each(contributeButtons, (elem, indx) => {
        elem.addEventListener('click', openModal);
    });

    each(closeButtons, (elem, indx) => {
        elem.addEventListener('click', closeModal);
    });
}


export function init() {
    const contributeModalContainer = document.getElementById('ContributeModal');

    extractWeb3Js().then((web3js) => {
        const token = window['__token'] || null;
        if (!token) {
            return;
        }

        ReactDOM.render(
            <ModalComponent token={token} web3js={web3js}/>,
            contributeModalContainer
        );
    });
}


function extractWeb3Js() {
    if (typeof web3 === 'undefined') {
        return Promise.resolve(null);
    }

    let web3js = new Web3(web3.currentProvider);

    return new Promise((resolve) => {

        const networkResolver = (err, netId) => {
            if (netId === "1") {
                resolve(web3js);
                return;
            }

            resolve(null);
        };

        web3js.version.getNetwork(networkResolver);
    });
}