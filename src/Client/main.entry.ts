console.log('Yeeee!');

import './Style/main.scss';

let elements = document.getElementsByClassName("anchor");
console.log(elements);

elements.item(0).addEventListener('click', (event: Event) => {
    console.log(event);
    console.log(event.target);
});