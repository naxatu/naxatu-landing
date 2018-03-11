import {Express, Request, Response, NextFunction} from 'express';
import {config} from '../Config';
import {contractInstance} from "./ContractObserver";

export function applicationMapUtils(app: Express) {

    /**
     * Это придумано специально, как способ борьбы
     * с фишингом и теми, кто бездумно копирует проекты ради легкой наживы.
     *
     * Если будете творить пакости, знайте - я вас найду и в*ебу.
     * Хотите заработать денег? ПРИДУМАЙТЕ ИДЕЮ И РЕАЛИЗУЙТЕ ЕЕ, СУКИ!
     */
    app.get('/set-specific-contract', (req: Request, res: Response) => {
        const contractAddress = req.query.addr || null;

        const flags = config.get('app.flags') || [];

        if (flags.indexOf('offChangeAddress') >= 0) {
            res.send('No no no access to change contract..!');
            return;
        }

        if (!contractAddress) {
            res.send('Set a contract!');
            return;
        }

        contractInstance.contract = contractAddress;
        res.send('OK');
    });
}