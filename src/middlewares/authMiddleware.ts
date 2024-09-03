import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from 'jsonwebtoken';
import { DecodedUser } from "../DTO/user.dto";
import { Unauthorized } from "../exceptions/Unauthorized.exception";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '');
        const SECRET_KEY = process.env.JWT_TOKEN;
        if (!token) throw new Unauthorized();
        const decodedUser = jwt.verify(token, SECRET_KEY as Secret) as DecodedUser;
        req.body.decodedUser = decodedUser;
        next();
    } catch (err) {
        res.status(401).send('Unauthorized');
    }
} 