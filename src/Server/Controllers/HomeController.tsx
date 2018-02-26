import * as React from 'react';
import {Request, Response} from 'express';
import {ViewRenderer} from '../Utils/ViewRenderer';
import {HomeView} from '../Views/HomeView';
import {config} from '../Config';

/**
 * GET /
 * Home page.
 */
export function index(req: Request, res: Response): void {

    const viewRenderer = new ViewRenderer(<HomeView />);

    res.send(viewRenderer.render());
}
