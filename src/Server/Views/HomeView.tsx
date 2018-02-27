import * as React from 'react';
import {MainLayout, IMainLayoutProps} from './Components/MainLayout';
import {Button} from './Components/Button';
import {Why} from './HomeComponent/Why'


import {Intro} from './HomeComponent/Intro'

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
                <Why />
            </MainLayout>
        );
    }
}