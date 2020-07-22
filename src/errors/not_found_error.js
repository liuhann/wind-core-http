const HttpError = require('./http_error'),
    { NOT_FOUND } = require('./err_codes');

module.exports = class NotFoundError extends HttpError {
    constructor(msg, props) {
        super(NOT_FOUND, msg, props);
    }
};
