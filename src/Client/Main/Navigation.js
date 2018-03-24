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

        this.openBtn = document.getElementsByClassName('__js_navigation-open')[0];
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

const introHeight = document.getElementById("intro").offsetHeight;
document.getScroll = () => {
    if (window.pageYOffset != undefined) {
        return {
            x: pageXOffset,
            y: pageYOffset
        };
    }
    else {
        let sx, sy, d = document, r = d.documentElement, b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;

        return {
            x: sx,
            y: sy
        };
    }
};

const header = document.getElementsByClassName('header')[0];
const footerBanner = document.getElementsByClassName('__js_footer-banner')[0];
const onScrollHandler = () => {
    const heightIndex = document.getScroll().y - introHeight + 48;
    if (heightIndex > 0) {
        header.classList.contains('-dark') || header.classList.add('-dark');
        footerBanner.classList.contains('-show') || footerBanner.classList.add('-show');
    } else {
        header.classList.contains('-dark') && header.classList.remove('-dark');
        footerBanner.classList.contains('-show') && footerBanner.classList.remove('-show');
    }
};

document.addEventListener("scroll", onScrollHandler);
onScrollHandler();