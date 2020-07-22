/**
 * 可以直接抛给http调用端的异常
 */
class HttpError extends Error {
    constructor(code, message, props) {
        super(message);
        this.code = code;
        this.props = props;
    }

    print() {
        return {
            code: this.code,
            msg: this.message
        };
    }
}

module.exports = HttpError;
