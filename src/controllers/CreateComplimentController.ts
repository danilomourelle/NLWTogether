import { Request, Response } from "express";
import { CreateComplimentService } from "../service/CreateComplimentService";

export class CreateComplimentController {
    async handle(req: Request, res: Response) {
        const { tagId, senderUserId, receiverUserId, message } = req.body;

        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.exec({ tagId, senderUserId, receiverUserId, message })

        return res.status(201).send({ compliment })
    }
}