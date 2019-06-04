var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

const angularClientIndexHtml = __dirname + '/dist/NeuroApplied/index.html';
process.env.AZURE_STORAGE_ACCOUNT = process.env.AZURE_STORAGE_CONNECTION_STRING || 'DefaultEndpointsProtocol=https;AccountName=jerusalem;AccountKey=AnFeK751AXOgp2HnaRvIALI7pbgskaq/WI4PrBUS3z1AsMYOWerq+4o46J7rW3RF6tIRNvIiKYaunZ6PDfxAjA==;EndpointSuffix=core.windows.net';


var config = {
    development: {
        mainHostUrl: 'http://localhost:3000',
        root: rootPath,
        port: process.env.PORT || 3000,
        db: process.env.db_production_connectionString || 'mongodb://127.0.0.1:27017/local',
    },

    
};


module.exports = {currentEnv: env, angularClientIndexHtml: angularClientIndexHtml, testEnv: config['test'], currentEnvConfig: config[env], allEnvConfig: config};


