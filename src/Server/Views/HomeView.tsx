import * as React from 'react';
import * as i18n from "i18n";
import {MainLayout, IMainLayoutProps} from './Components/MainLayout';
import {TokenStatsInterface} from '../Utils/TokenStats'
import {IDomainProps}  from '../Utils/DomainManager';

import {Intro} from './HomeComponent/Intro';
import {About} from './HomeComponent/About';
import {Citation} from './HomeComponent/Citation';
import {IcoStatus} from './HomeComponent/IcoStatus';
import {XataToken} from './HomeComponent/XataToken';
import {Roadmap} from './HomeComponent/Roadmap';
import {Team} from './HomeComponent/Team';
import {WhereHouse} from './HomeComponent/WhereHouse';
import {Challenge} from './HomeComponent/Challenge';
import {Partners} from './HomeComponent/Partners';
import {FAQ} from './HomeComponent/FAQ';
import {Heroes} from './HomeComponent/Heroes';
import {Contacts} from './HomeComponent/Contacts';
import {Advisers} from './HomeComponent/Advisers';

import {ShareInfo} from './HomeComponent/ShareInfo'

export interface IHomeViewProps {
    domain: IDomainProps;
    url: string;
    lang: string;
    token: TokenStatsInterface | null
}

export interface IHomeViewState {
}

export class HomeView extends React.Component<IHomeViewProps, IHomeViewState> {

    render() {

        const {url, lang, token = null, domain} = this.props;

        const layoutProps: IMainLayoutProps = {
            title: i18n.__("Первое в мире ICO по сбору средств на хату в Киеве"),
            description: i18n.__("Это первое, и возможно, самое полезное ICO за все время существования Ethereum, где основатель собирает на полезную и нужную вещь - на собственную хату"),
            url: url,
            domain: domain,
            lang: lang
        };

        return (
            <MainLayout {...layoutProps}>
                <Intro />
                <IcoStatus token={token}/>
                <ShareInfo domain={domain}/>
                <About domain={domain}/>
                <Citation />
                <WhereHouse />
                <XataToken />
                <Roadmap />
                <Team />
                <Advisers />
                <Partners />
                <Challenge />
                <Heroes />
                <FAQ domain={domain}/>
                <Contacts domain={domain}/>
            </MainLayout>
        );
    }
}