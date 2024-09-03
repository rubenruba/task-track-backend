import { Request, Response } from "express";

/*
    ====== CUSTOM ERROR CODES =====
    - 1000 => Invalid Params
    - 1005 => Unauthorized

    === LOGIN/REGISTER ACTIONS ===
    - 1100 => User Not Found
    - 1101 => No Password Provided / Password Needed
    - 1102 => Incorrect Password
    - 1103 => User Already Exists
    - 1104 => Verify Token Error
    - 1105 => Passwords doesn't match
    - 1106 => Invalid Email

    === TASK ACTIONS ===
    - 1200 => Task Not Found
    - 1201 => Task Already Exists

    === LIST ACTIONS ===
    - 1300 => List Not Found
    - 1301 => List Already Exists
*/

export type EntityType = 'User' | 'List' | 'Task';

type AsyncHandler = (req: Request, res: Response) => Promise<any>;

export function errorHandler(fn: AsyncHandler) {
    return (req: Request, res: Response) => {
        Promise.resolve(fn(req, res)).catch((err) => {
            const statusCode = err.statusCode || 500;
            const message = err.message || 'Internal Server Error';

            res.status(statusCode).json({ error: message, errorCode: err.errorCode || 500 });
            console.error(err);
        });
    };
};