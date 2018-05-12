import "babel-polyfill";
import {each} from 'lodash';
import animateScrollTo from 'animated-scroll-to';
import * as ShareController from './Main/ShareController';
import {sendGAEvent} from './Main/AnalyticsHelper';
import './Main/Navigation';
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

