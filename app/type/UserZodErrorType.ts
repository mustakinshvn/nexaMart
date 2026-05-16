export type UserZodErrorType = {
    origin?: string;
    code: string;
    format?: string;
    pattern?: string;
    path: string[];
    message: string;
}