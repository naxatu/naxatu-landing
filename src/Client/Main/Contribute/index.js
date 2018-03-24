const contributeButtons = document.getElementsByClassName('__js_contribute');
const contributeModal = document.getElementById('cnt-popup');
import {each} from 'lodash';
import {sendGAEvent} from '../AnalyticsHelper';

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