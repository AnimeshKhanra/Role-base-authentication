class ApiError extends Error {
    constructor(statusCode, message="Something went wrong", errors=[], stack="") {
        super(message);
        this.statusCode = statusCode;
        this.data = null;       // Error doesn't have data
        this.success = false;
        this.message = message;
        this.errors = errors;
        this.stack = stack;

        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.stack);
        }
    }
}

export { ApiError };