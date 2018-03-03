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
            title: ":house: Первое в мире ICO по сбору на Хату в Киеве - Собираю на Хату",
            description: "Время тикает :watch:. ",
            url: url,
            baseHost: baseHost
        };

        return (
            <MainLayout {...layoutProps}>
                <Intro />
                <About />
                <IcoStatus />
                <Citation />
                <WhereHouse />
                <XataToken />
                <Roadmap />
                <Team />
                <Challenge />
                <Partners />
                <FAQ />
                <Contacts />
            </MainLayout>
        );
    }
}