import {Request, Response} from 'express';
import {validate as isValidEmail} from 'email-validator';

import {HomeView} from '../Views/HomeView';
import Subscription from '../Models/Subscription';

/**
 * GET /
 * Home page.
 */
export function index(req: Request, res: Response): void {
    const view = new HomeView(
        'Собираю на Хату - ICO с душей',
        ['main'],
        {}
    );

    res.send(view.render());
}

export async function subscribe(req: Request, res: Response): Promise<void> {
    const {email} = req.body;
    if (email === undefined) {
        res.json({error: 'Please provide your email address.'});
        return;
    }

    if (!isValidEmail(email)) {
        res.json({error: 'Please provide a valid email address.'});
        return;
    }

    const subscriptions = await Subscription.findAll({
        where: {
            email
        }
    });

    if (subscriptions.length !== 0) {
        res.json({error: "You're already subscribed."});
        return;
    }

    const subscription = await Subscription.create({email});
    res.json({msg: 'Thank you for subscribing.'});
}
