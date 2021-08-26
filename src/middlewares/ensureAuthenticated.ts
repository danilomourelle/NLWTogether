import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send({
            message: "Serviço com acesso restrito."
        })
    }

    try {
        const { sub: userId } = verify(token.replace("Bearer ", ""), "chaveSuperSecreta") as string;

        res.locals.userId = userId;

        return next();
        
    } catch (error) {
        return res.status(401).send({
            message: "Serviço com acesso restrito."
        })
    }
}