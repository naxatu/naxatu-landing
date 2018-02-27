import {each} from 'lodash';

import './Style/main.scss';

let elements = document.getElementsByClassName("anchor");
console.log(elements);

const onClickAnchorLink = (event: UIEvent) => {
    const btn = event.currentTarget as any;
    console.log(btn.getAttribute('href'));
};

each(elements, (elem, indx) => {
    elem.addEventListener('click', onClickAnchorLink);
});