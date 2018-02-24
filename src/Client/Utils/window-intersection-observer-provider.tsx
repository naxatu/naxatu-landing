import * as React from 'react';
import * as PropTypes from 'prop-types';

import {WindowIntersectionObserverService} from './window-intersection-observer-service';

export interface IWindowIntersectionObserverProviderProps {
    windowIntersectionObserverService: WindowIntersectionObserverService;
}

export interface IWindowIntersectionObserverProviderChildContext {
    windowIntersectionObserverService: WindowIntersectionObserverService;
}

export class WindowIntersectionObserverProvider extends React.Component<IWindowIntersectionObserverProviderProps, object> {
    public static readonly propTypes: PropTypes.ValidationMap<object> = {
        windowIntersectionObserverService: PropTypes.object.isRequired,
    };

    public static readonly childContextTypes: PropTypes.ValidationMap<object> = {
        windowIntersectionObserverService: PropTypes.object.isRequired,
    };

    private readonly _windowIntersectionObserverService: WindowIntersectionObserverService;

    public constructor(props: IWindowIntersectionObserverProviderProps) {
        super(props);
        this._windowIntersectionObserverService = props.windowIntersectionObserverService;
    }

    public getChildContext(): IWindowIntersectionObserverProviderChildContext {
        return {
            windowIntersectionObserverService: this._windowIntersectionObserverService,
        };
    }

    public render(): JSX.Element {
        return React.Children.only(this.props.children);
    }
}
