import * as React from 'react';
import {Button} from './Components/Button';
import {MainLayout, IMainLayoutProps} from './Components/MainLayout';

export interface IProps {
}
export interface IState {
}

export class HomeView extends React.Component<IProps, IState> {
    render() {

        const layoutProps = {

        };

        return (
            <MainLayout>
                <section className="section">
                    Its a Section content...
                    <br />
                    <br />
                    <Button>Some text of Button!</Button>
                    <br />
                    Sheeet.. Fucken sheet
                </section>
            </MainLayout>
        );
    }
}