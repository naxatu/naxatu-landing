import * as React from 'react';

import {Container} from '../Components/Container/Container';
import {Header, HeaderMenuLink} from '../Components/Header/Header';
import {Footer} from '../Components/Footer/Footer';

export interface IHomeViewProps {
    something?: string;
}

const headerMenuLinks: HeaderMenuLink[] = [
    {text: 'Currencies'},
    {text: 'Hybrid'},
    {text: 'Security'},
    {text: 'News'},
];

export class HomeView extends React.PureComponent<IHomeViewProps, object> {
    public render(): JSX.Element {
        return (
            <div>
                <Header links={headerMenuLinks}/>
                <Container>YO</Container>
                <Container>YO YO YO - {this.props.something}</Container>
                <Footer links={headerMenuLinks}/>
            </div>
        );
    }
}
