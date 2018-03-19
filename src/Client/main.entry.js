import {each} from 'lodash';
import animateScrollTo from 'animated-scroll-to';
import * as ShareController from './Main/ShareController';
import './Main/Navigation';
import {sendGAEvent} from './Main/AnalyticsHelper';
import './Main/PartnersAndAdvisers';
import './Style/main.scss';

console.log("What do you want? There is nothing interesting! Get out of here...");

let elements = document.getElementsByClassName("anchor");
const onClickAnchorLink = (event) => {
    const btn = event.currentTarget;
    const scrollToId = btn.getAttribute('href');
    animateScrollTo(document.querySelector(scrollToId));

    sendGAEvent('anchor', 'click', scrollToId);
};

each(elements, (elem, indx) => {
    elem.addEventListener('click', onClickAnchorLink);
});

let telegramBox = document.getElementsByClassName("telegram-box")[0] || null;
if (telegramBox) {
    telegramBox.addEventListener('click', () => {
        sendGAEvent('telegram', 'click');
    });
}

ShareController.init();


let onCopyContractAddress = () => {
    document.getElementById('contract-address').select();
    document.execCommand("Copy");

    sendGAEvent('contract', 'copy');
};

document.getElementsByClassName('__js-copy-contract')[0].addEventListener('click', onCopyContractAddress);


if (typeof web3 !== 'undefined') {
    let web3js = new Web3(web3.currentProvider);
    web3js.version.getNetwork((err, netId) => {
        if (err) return;
        sendGAEvent('metamask', 'exists', netId);
        switch (netId) {
            case "1":
                break;

            default:
                console.log("Metamask ID:", netId);
        }
    });
}