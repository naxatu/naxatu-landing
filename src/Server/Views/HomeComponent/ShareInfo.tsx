import * as React from 'react';
import * as i18n from "i18n";
import {IDomainProps}  from '../../Utils/DomainManager';
import {FacebookButton} from '../Components/Facebook';

export interface IShareProps {
    domain: IDomainProps;
}

export class ShareInfo extends React.Component<IShareProps, any> {
    render() {

        const {domain} = this.props;

        return <section className="share">

            <h2 className="share__title">{i18n.__('Нравиться? Расшарь проект!')}</h2>

            <p className="share__desc">{i18n.__('А представьте, как это понравиться вашим друзьям, даже если они ничего не смыслят о ICO, блокчейне или криптовалюте. Им будет интересно просто почитать о проекте.')}</p>

            <div className="share__buttons">
                <div id="ShareComponent" className="share__buttons-round"></div>

                <FacebookButton url={domain.url}/>
            </div>
        </section>
    }
}