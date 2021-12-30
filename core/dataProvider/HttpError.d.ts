declare class HttpError extends Error {
    readonly message: any;
    readonly status: any;
    readonly body: null;
    constructor(message: any, status: any, body?: null);
}
export default HttpError;
