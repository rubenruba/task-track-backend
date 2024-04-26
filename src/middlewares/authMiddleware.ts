import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from 'jsonwebtoken';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization;
        const SECRET_KEY = process.env.SECRET_KEY;
        console.log(token); // TO DO - Extract the token from the headers
        if (!token) throw new Error('No permissions');
        const decodedUser = jwt.verify(token, SECRET_KEY as Secret);
        req.body.user = decodedUser;
        next();
    } catch (err) {
        res.status(401).send('Unauthorized');
    }
} 