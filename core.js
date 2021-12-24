import createDatabaseConnection from './database.js';
import createWebServer from './webserver.js';

function createCore(configurations = {}) {
    const database = configurations.database || createDatabaseConnection();
    const webserver = configurations.webserver || createWebServer();

    function start(){
        console.log('> [core] Starting...');
        database.start();
        webserver.start();
        console.log('> [core] Starting done! System running!');
    }

    function stop(){
        console.log('> [core] Stopping...');
        webserver.stop();
        database.stop();
        console.log('> [core] Stopping done!');
    }

    return {
        start,
        stop
    }
}

export default createCore;