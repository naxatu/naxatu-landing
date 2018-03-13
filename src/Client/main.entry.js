import {each} from 'lodash';
import animateScrollTo from 'animated-scroll-to';
import * as IcoStatusController from './Main/IcoStatusController';
import './Main/Navigation';

import './Style/main.scss';

console.log("Чего? Тут ничего нет. Кышь-кышь от сюда..!");

let elements = document.getElementsByClassName("anchor");
const onClickAnchorLink = (event) => {
    const btn = event.currentTarget;
    const scrollToId = btn.getAttribute('href');
    animateScrollTo(document.querySelector(scrollToId));

    dataLayer && dataLayer.push({'event': 'click-' + scrollToId});
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
        dataLayer && dataLayer.push({'event': 'show_telegram'});
    });
}

IcoStatusController.init();