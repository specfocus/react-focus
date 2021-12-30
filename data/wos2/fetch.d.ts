export interface Options extends RequestInit {
    user?: {
        authenticated?: boolean;
        token?: string;
    };
}
export declare const createHeadersFromOptions: (options: Options) => Headers;
export declare const fetchJson: (url: string, options?: Options) => Promise<void | {
    status: number;
    headers: Headers;
    body: string;
    json: any;
}>;
