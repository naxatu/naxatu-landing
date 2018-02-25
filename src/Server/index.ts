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
(async() => {
    // await sequelize.sync();

    expressApp.listen(expressApp.get('port'), () => {
        console.log('  App is running at http://localhost:%d in %s mode', expressApp.get('port'), expressApp.get('env'));
        console.log('  Press CTRL-C to stop\n');
    });
})();
