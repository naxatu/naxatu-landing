import * as React from 'react';
import {Request, Response} from 'express';
import {ViewRenderer} from '../Utils/ViewRenderer';
import {HomeView} from '../Views/HomeView';

/**
 * GET /
 * Home page.
 */
export function index(req: Request, res: Response): void {

    const props = {
        title: 'Whatsapp, niga!'
    };

    const viewRenderer = new ViewRenderer(<HomeView {...props}/>);

    res.send(viewRenderer.render());
}
