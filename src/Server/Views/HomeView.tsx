import * as React from 'react';
import {MainLayout, IMainLayoutProps} from './Components/MainLayout';
import {Button} from './Components/Button';
import {Intro} from './HomeComponent/Intro';
import {Why} from './HomeComponent/Why';
import {Citation} from './HomeComponent/Citation';

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
                <Citation />
            </MainLayout>
        );
    }
}