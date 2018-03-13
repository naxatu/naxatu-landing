import * as express from 'express';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as dotenv from 'dotenv';
import * as path from 'path';
import {config} from './Config';
import * as expressValidator from 'express-validator';
import {applicationMapUtils} from './Utils/ApplicationUtils';


dotenv.config({path: '.env'});

import * as Controllers from './Controllers';

const expressApp: express.Express = express();
expressApp.set('port', config.get('app.port') || 3000);
expressApp.set('hostname', config.get('app.host') || 'localhost');

expressApp.use(compression());
expressApp.use(logger('dev'));
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({extended: true}));
expressApp.use(expressValidator());

const languages = {
    en: 'en',
    ua: 'ua'
};

const defaultLanguage = 'ru';

expressApp.use((req: express.Request, res: express.Response, next) => {
    let hostSegments = (req.hostname as string).split('.'),
        language = defaultLanguage;

    if (hostSegments[0] in languages) {
        language = hostSegments[0];
    }

    res.set('language', language);

    next();
});

/**
 * Set configuration for static content
 */
expressApp.use(express.static(path.join(__dirname, '../public'), {maxAge: 31557600000}));

/**
 * Primary app routes.
 */
expressApp.get('/', Controllers.Home.index);
applicationMapUtils(expressApp);


export {
    expressApp
};
