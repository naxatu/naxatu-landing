import * as React from 'react';
import * as PropTypes from 'prop-types';

import {WindowScrollService} from './window-scroll-service';

export interface IWindowScrollProviderProps {
    windowScrollService: WindowScrollService;
}

export interface IWindowScrollProviderChildContext {
    windowScrollService: WindowScrollService;
}

export class WindowScrollProvider extends React.Component<IWindowScrollProviderProps, object> {
    public static readonly propTypes: PropTypes.ValidationMap<object> = {
        windowScrollService: PropTypes.object.isRequired,
    };

    public static readonly childContextTypes: PropTypes.ValidationMap<object> = {
        windowScrollService: PropTypes.object.isRequired,
    };

    private readonly windowScrollService: WindowScrollService;

    public constructor(props: IWindowScrollProviderProps) {
        super(props);
        this.windowScrollService = props.windowScrollService;
    }

    public getChildContext(): IWindowScrollProviderChildContext {
        return {
            windowScrollService: this.windowScrollService,
        };
    }

    public render(): JSX.Element {
        return React.Children.only(this.props.children);
    }
}
