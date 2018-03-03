import {each} from 'lodash';
import animateScrollTo from 'animated-scroll-to';
import * as IcoStatusController from './Main/IcoStatusController';

import './Style/main.scss';

console.log("Чего? Тут ничего нет. Кышь-кышь от сюда..!");

let elements = document.getElementsByClassName("anchor");
const onClickAnchorLink = (event) => {
    const btn = event.currentTarget;
    animateScrollTo(document.querySelector(btn.getAttribute('href')));
    event.preventDefault();

    return false;
};

each(elements, (elem, indx) => {
    elem.addEventListener('click', onClickAnchorLink);
});


IcoStatusController.init();