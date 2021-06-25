import { Request, Response } from 'express';
import { CreateUserService } from '../service/CreateUserService';

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password, admin } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.exec({ name, email, password, admin });

        return res.status(201).send({ user })
    }
}