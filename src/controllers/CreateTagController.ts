import { Request, Response } from 'express';
import { CreateTagService } from '../service/CreateTagService';

export class CreateTagController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;

        const createTagService = new CreateTagService();

        const tag = await createTagService.exec(name);

        return res.status(201).send({ tag })
    }
}