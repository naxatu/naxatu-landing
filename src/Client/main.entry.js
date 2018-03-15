import {each} from 'lodash';
import animateScrollTo from 'animated-scroll-to';
import * as IcoStatusController from './Main/IcoStatusController';
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
        if (telegramBox.classList.contains('-open')) {
            return;
        }

        telegramBox.classList.add('-open');
        sendGAEvent('telegram', 'show');
    });
}

IcoStatusController.init();