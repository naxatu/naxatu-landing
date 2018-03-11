import * as React from 'react';
import {MainLayout, IMainLayoutProps} from './Components/MainLayout';
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

export interface IHomeViewProps {
    url: string;
    baseHost: string;
}

export interface IHomeViewState {
}

export class HomeView extends React.Component<IHomeViewProps, IHomeViewState> {

    render() {

        const {url, baseHost} = this.props;

        const layoutProps: IMainLayoutProps = {
            title: ":house: Первое в мире ICO по сбору средств на Хату в Киеве",
            description: "Это первое, и возможно, самое полезное ICO за все время существования Ethereum, " +
            "где основатель собирает на полезную и нужную вещь - на собственную Хату",
            url: url,
            baseHost: baseHost
        };

        return (
            <MainLayout {...layoutProps}>
                <Intro />
                <IcoStatus />
                <About />
                <Citation />
                <WhereHouse />
                <XataToken />
                <Roadmap />
                <Team />
                <Partners />
                <Challenge />
                <Heroes/>
                <FAQ />
                <Contacts />
            </MainLayout>
        );
    }
}