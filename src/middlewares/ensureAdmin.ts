import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepo } from "../repositories/UsersRepo";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    const userId = res.locals.userId as string;

    const usersRepo = getCustomRepository(UsersRepo);

    const { admin } = await usersRepo.findOne(userId);

    console.log(admin);

    if (admin) {
        return next();
    }

    return res.status(401).send();
}