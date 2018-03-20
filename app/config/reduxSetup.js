/* eslint global-require: 0 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./reduxSetup.prod');
} else {
    module.exports = require('./reduxSetup.dev');
}
