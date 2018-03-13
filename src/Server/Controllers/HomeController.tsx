import * as React from 'react';
import {Request, Response} from 'express';
import {ViewRenderer} from '../Utils/ViewRenderer';
import {HomeView} from '../Views/HomeView';

/**
 * GET /
 * Home page.
 *
 * @param {Request} req
 * @param {Response} res
 */
export function index(req: Request, res: Response): void {
    const url = req.protocol + '://' + req.get('Host') + req.url;
    const homeViewProps = {
        url: url,
        baseHost: `${req.protocol}://${req.get('Host')}`,
        language: res.get('language')
    };

    const viewRenderer = new ViewRenderer(<HomeView {...homeViewProps}/>);

    res.send(viewRenderer.render());
}
