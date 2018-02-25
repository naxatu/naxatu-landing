import * as ReactModule from 'react';
import * as ReactDOMModule from 'react-dom';
import * as HomeViewModule from './Views/HomeView';
import {IHomeViewProps} from './Views/HomeView';
import * as WindowScrollServiceModule from './Utils/window-scroll-service';
import * as WindowScrollProviderModule from './Utils/window-scroll-provider';
import * as WindowIntersectionObserverServiceModule from './Utils/window-intersection-observer-service';
import * as WindowIntersectionObserverProviderModule from './Utils/window-intersection-observer-provider';
import * as ApiServiceModule from './Utils/ApiService';
import * as ApiProviderModule from './Utils/ApiProvider';

import 'normalize.css';
import './fonts.scss';
import './critical.scss';
import './main.scss';

const rootEl = document.getElementById('root');
const initProps = (window.__initState || {}).props;

require.ensure(
    [],
    async (require: WebpackRequire) => {
        // tslint:disable:variable-name
        const React = require<typeof ReactModule>('react');
        const ReactDOM = require<typeof ReactDOMModule>('react-dom');
        const {HomeView} = require<typeof HomeViewModule>('./Views/HomeView');
        const {WindowScrollService} = require<typeof WindowScrollServiceModule>('./Utils/window-scroll-service');
        const {WindowScrollProvider} = require<typeof WindowScrollProviderModule>('./Utils/window-scroll-provider');
        const {WindowIntersectionObserverService} = require<typeof WindowIntersectionObserverServiceModule>('./Utils/window-intersection-observer-service');
        const {WindowIntersectionObserverProvider} = require<typeof WindowIntersectionObserverProviderModule>('./Utils/window-intersection-observer-provider');
        const ApiService = require<typeof ApiServiceModule>('./Utils/ApiService');
        const {ApiProvider} = require<typeof ApiProviderModule>('./Utils/ApiProvider');
        // tslint:enable:variable-name

        const windowScrollService = new WindowScrollService();
        const windowIntersectionObserverService = new WindowIntersectionObserverService();

        const render = (props: IHomeViewProps) => ReactDOM.hydrate((
                <ApiProvider apiService={ApiService}>
                    <WindowIntersectionObserverProvider
                        windowIntersectionObserverService={windowIntersectionObserverService}>
                        <WindowScrollProvider windowScrollService={windowScrollService}>
                            <HomeView {...props} />
                        </WindowScrollProvider>
                    </WindowIntersectionObserverProvider>
                </ApiProvider>
            ), rootEl
        );

        // render(initProps);

        render({
            ...initProps,
            something: 'something!'
        });
    },
    'home-async'
);
