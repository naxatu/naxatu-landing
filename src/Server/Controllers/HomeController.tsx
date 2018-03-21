import * as React from 'react';
import * as i18n from "i18n";
import {Request, Response} from 'express';
import {ViewRenderer} from '../Utils/ViewRenderer';
import {HomeView} from '../Views/HomeView';
import {StatusObserver} from '../Utils/TokenStats';
import {findDomainByLang} from '../Utils/DomainManager';

/**
 * Да простят меня боги за такое убожество..
 * @type {StatusObserver}
 */
const statusObserver = new StatusObserver();

/**
 * GET /
 * Home page.
 *
 * @param {Request} req
 * @param {Response} res
 */
export function index(req: Request, res: Response): void {
    const url = req.protocol + '://' + req.get('Host') + req.url;
    const domain = findDomainByLang(i18n.getLocale());

    if (!domain) {
        res.status(500);
        res.send("Something wrong!");
        return;
    }


    const homeViewProps = {
        url: url,
        token: statusObserver.getState(),
        domain: domain,
        lang: i18n.getLocale()
    };

    const viewRenderer = new ViewRenderer(<HomeView {...homeViewProps}/>);

    res.send(viewRenderer.render());
}
