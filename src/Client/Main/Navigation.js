import {each} from 'lodash';

class PageNavigation {

    isOpen = false;
    pageNavigation;

    openBtn;
    closeBtn;
    overlay;
    links = [];

    constructor(pageNavigation) {
        this.pageNavigation = pageNavigation;

        this.openBtn = pageNavigation.getElementsByClassName('navigation-open')[0];
        this.closeBtn = pageNavigation.getElementsByClassName('navigation-close')[0];
        this.overlay = pageNavigation.getElementsByClassName('navigation-overlay')[0];
        this.links = this.pageNavigation.querySelectorAll('.anchor');

        this.openBtn.addEventListener('click', this.open);

        each(this.links, (elem) => {
            elem.addEventListener('click', this.close);
        });
        this.closeBtn.addEventListener('click', this.close);
        this.overlay.addEventListener('click', this.close);
    }

    open = () => {
        if (this.isOpen) return;

        this.pageNavigation.classList.add('-open');
        this.isOpen = true;
    };

    close = () => {
        if (!this.isOpen) return;

        this.pageNavigation.classList.remove('-open');
        this.isOpen = false;
    };
}


const pageNavigationElement = document.getElementById('page-navigation');
if (pageNavigationElement) {
    window.pageNavigation = new PageNavigation(pageNavigationElement);
}