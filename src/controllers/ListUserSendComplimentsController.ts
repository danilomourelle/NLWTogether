import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../service/ListUserSendComplimentsService";

export class ListUserSendComplimentsController {
    async handle(req: Request, res: Response) {
        const userId = res.locals.userId as string;

        const complimentsList = await new ListUserSendComplimentsService().exec(userId)

        return res.status(200).send({ complimentsList });
    }
}