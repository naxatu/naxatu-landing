import {each} from 'lodash';
import {extractValue} from './Main/TokenStats'

import './Style/main.scss';

console.log("Чего? Тут ничего нет. Кышь-кышь от сюда..!");

let elements = document.getElementsByClassName("anchor");
const onClickAnchorLink = (event) => {
    const btn = event.currentTarget;
    console.log(btn.getAttribute('href'));
};

each(elements, (elem, indx) => {
    elem.addEventListener('click', onClickAnchorLink);
});


extractValue().then(result => {
    console.log(result);
});