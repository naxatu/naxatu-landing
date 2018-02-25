import * as React from 'react';
import {Button} from './Components/Button';

export interface IProps {
}
export interface IState {
}

export class HomeView extends React.Component<IProps, IState> {
    render() {
        return (
            <section className="section">
                Its a Section content...
                <br />
                <br />
                <Button>Some text of Button!</Button>
                <br />
                Sheeet.. Fucken sheet
            </section>
        );
    }
}