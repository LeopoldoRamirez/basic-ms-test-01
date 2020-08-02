const dotenv = require('dotenv');
dotenv.config();


/**
 * Define all variables you need for your application
 */
module.exports = {
    appPort : process.env.APPLICATION_PORT || 8080
}
