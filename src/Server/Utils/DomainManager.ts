import {Dictionary, find} from 'lodash';
import {config} from '../Config';
const currentHost: string = config.get('app.host');
const currentPort: number = +config.get('app.port');

const urlPort: string = [80, 443].indexOf(currentPort) == -1 ? `:${currentPort}` : '';

interface IDomainProps {
    domain: string;
    url: string;
    language: string;
    isDefault: boolean;
    social: {
        telegram: string;
        facebook: string;
        github: string;
        reddit: string;

        [key: string]: string;
    }
}

const domainList: Dictionary<IDomainProps> = {};

/**
 * Configuration for Main Domain
 */
domainList[currentHost] = {
    domain: currentHost,
    url: `http://${currentHost}${urlPort}`,
    language: 'en',
    isDefault: true,
    social: {
        telegram: 'collecting_for_hut',
        facebook: 'collectingforhut',
        github: 'naxatu',
        reddit: '/r/Buttcoin/comments/87t0oa/i_think_i_may_have_found_the_most_honest_ico/'
    }
};

/**
 * Configuration for English Domain
 */
domainList['ru.' + currentHost] = {
    domain: 'ru.' + currentHost,
    url: `http://ru.${currentHost}${urlPort}`,
    language: 'ru',
    isDefault: false,
    social: {
        telegram: 'naxatu',
        facebook: 'collectingforhut',
        github: 'naxatu',
        reddit: '/r/Buttcoin/comments/87t0oa/i_think_i_may_have_found_the_most_honest_ico/'
    }
};

/**
 * @param host
 * @return {IDomainProps|null}
 */
function findDomain(host: string): IDomainProps | null {
    return domainList[host] || null;
}

/**
 * @param lang
 * @return {IDomainProps | null}
 */
function findDomainByLang(lang: string): IDomainProps | null {
    for (let host in domainList) {
        if (domainList[host].language === lang) {
            return domainList[host];
        }
    }

    return null;
}


export {
    IDomainProps,
    domainList,

    findDomain,
    findDomainByLang
};
