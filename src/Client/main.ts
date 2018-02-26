console.log('Yeeee!');

let elements = document.getElementsByClassName("anchor");
console.log(elements);

elements.item(0).addEventListener('click', (event: Event) => {
    console.log(event);
    console.log(event.target);
});