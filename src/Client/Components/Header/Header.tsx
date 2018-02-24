import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classnames from 'classnames';
import {throttle} from 'lodash';

import {Logo} from '../Logo/Logo';
import {HorizontalMenu} from '../HorizontalMenu/HorizontalMenu';
import {Link} from '../Link/Link';

import {WindowScrollService, ScrollHandler} from '../../Utils/window-scroll-service';

export interface HeaderMenuLink {
    text: string;
    title?: string;
    href?: string;
}

export interface IHeaderProps {
    links?: HeaderMenuLink[];
}

export interface IHeaderState {
    isScrolled: boolean;
}

export interface IHeaderContext {
    windowScrollService: WindowScrollService;
}

export class Header extends React.PureComponent<IHeaderProps, IHeaderState> {
    public static readonly contextTypes: PropTypes.ValidationMap<IHeaderContext> = {
        windowScrollService: PropTypes.object,
    };

    public readonly state: IHeaderState = {
        isScrolled: false,
    };

    private windowScrollService: WindowScrollService;
    private throttledScrollHandler: ScrollHandler = throttle(this.scrollHandler.bind(this), 200);

    public constructor(props: IHeaderProps, context: IHeaderContext) {
        super(props, context);
        this.windowScrollService = context.windowScrollService;
    }

    public componentDidMount(): void {
        document.body.classList.add('Header--fixed');
        this.windowScrollService.subscribe(this.throttledScrollHandler);
    }

    public componentWillUnmount(): void {
        this.windowScrollService.unsubscribe(this.throttledScrollHandler);
    }

    public render(): JSX.Element {
        const horizontalMenu = this.renderHeaderMenu();

        return (
            <header className={classnames('header', {'i-scrolled': this.state.isScrolled})}>
                <Logo className="header__logo"/>
                {horizontalMenu}
            </header>
        );
    }

    private renderHeaderMenu(): null | JSX.Element {
        const {links = []} = this.props;
        if (links.length === 0) {
            return null;
        }

        return (
            <HorizontalMenu className="header__horizontal-menu">
                {
                    links.map((link: HeaderMenuLink, i: number) => (
                        <span key={String(i)}>
                            <Link className="header__link" title={link.title || link.text}>
                                {link.text}
                            </Link>
                        </span>
                    ))
                }
            </HorizontalMenu>
        );
    }

    private scrollHandler(scrollTop: number): void {
        const {isScrolled} = this.state;
        if (isScrolled && scrollTop === 0) {
            this.setState({isScrolled: false});
        } else if (!isScrolled && scrollTop > 0) {
            this.setState({isScrolled: true});
        }
    }
}
