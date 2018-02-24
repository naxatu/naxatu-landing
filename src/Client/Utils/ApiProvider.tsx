import * as React from 'react';
import * as PropTypes from 'prop-types';

import * as ApiService from './ApiService';

type ApiService = typeof ApiService;

export interface IApiProviderProps {
    apiService: ApiService;
}

export interface IApiProviderChildContext {
    apiService: ApiService;
}

export class ApiProvider extends React.Component<IApiProviderProps, object> {
    public static readonly propTypes: PropTypes.ValidationMap<object> = {
        apiService: PropTypes.object.isRequired,
    };

    public static readonly childContextTypes: PropTypes.ValidationMap<object> = {
        apiService: PropTypes.object.isRequired,
    };

    private readonly _apiService: ApiService;

    public constructor(props: IApiProviderProps) {
        super(props);
        this._apiService = props.apiService;
    }

    public getChildContext(): IApiProviderChildContext {
        return {
            apiService: this._apiService,
        };
      }

    public render(): JSX.Element {
        return React.Children.only(this.props.children);
    }
}
