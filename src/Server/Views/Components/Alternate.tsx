import * as React from 'react';
import {map} from 'lodash';
import {domainList, IDomainProps} from '../../Utils/DomainManager';


export class Alternate extends React.Component {
    render() {
        return (
            <React.Fragment>
                {map(domainList, (domain: IDomainProps) => {
                    const props = {
                        key: domain.language,
                        rel: "alternate",
                        href: domain.url,
                        hrefLang: domain.isDefault ? "x-default" : domain.language
                    };

                    return <link {...props}/>
                })}
            </React.Fragment>
        );
    }
}