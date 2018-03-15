import {Dictionary} from 'lodash';
import {config} from '../Config';

const currentHost: string = config.get('app.host');

interface IDomainProps {
    domain: string;
    language: string;
    isDefault: boolean;
}

const domainList: Dictionary<IDomainProps> = {};

/**
 * Configuration for Main Domain
 */
domainList[currentHost] = {
    domain: currentHost,
    language: 'ru',
    isDefault: true
};

/**
 * Configuration for English Domain
 */
domainList['en.' + currentHost] = {
    domain: 'en.' + currentHost,
    language: 'en',
    isDefault: false
};

/**
 * @param host
 * @return {IDomainProps|null}
 */
function findDomain(host: string): IDomainProps | null {
    return domainList[host] || null;
}


export {
    IDomainProps,
    domainList,

    findDomain
};
