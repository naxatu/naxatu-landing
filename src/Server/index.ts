import * as errorHandler from 'errorhandler';
import {expressApp} from './Application';
import {sequelize} from './Sequelize';

/**
 * Error Handler. Provides full stack - remove for production
 */
expressApp.use(errorHandler());

/**
 * Start DB and Express server.
 */
(async () => {
    // await sequelize.sync();

    expressApp.listen(expressApp.get('port'), () => {
        console.log(' ');
        console.log(
            '  App is running at http://%s:%d in %s mode',
            expressApp.get('hostname'),
            expressApp.get('port'),
            expressApp.get('env')
        );
    });
})();
