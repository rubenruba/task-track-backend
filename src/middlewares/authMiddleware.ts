import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from 'jsonwebtoken';
import { DecodedUser } from "../DTO/user.dto";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '');
        const SECRET_KEY = process.env.JWT_TOKEN;
        if (!token) throw new Error('No permissions');
        const decodedUser = jwt.verify(token, SECRET_KEY as Secret) as DecodedUser;
        req.body.decodedUser = decodedUser.user;
        next();
    } catch (err) {
        res.status(401).send('Unauthorized');
    }
} 