import {each} from 'lodash';
import {sendGAEvent} from './AnalyticsHelper';
const partnerAndAdvisers = document.getElementsByClassName('__js-partner');

const onClickPartner = (partnerEventKey) => {
    return (event) => {
        console.log(partnerEventKey);
        sendGAEvent('partner', 'click', partnerEventKey);
    };
};

each(partnerAndAdvisers, (prt, index) => {
    const partnerEventKey = prt.getAttribute('partner-event-key') || index;
    prt.addEventListener('click', onClickPartner(partnerEventKey));
});