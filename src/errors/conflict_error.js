const HttpError = require('./http_error'),
    { CONFLICT } = require('./err_codes');

module.exports = class ConflictError extends HttpError {
    constructor(msg, props) {
        super(CONFLICT, msg, props);
    }
};
