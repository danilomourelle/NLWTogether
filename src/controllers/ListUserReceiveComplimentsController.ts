import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../service/ListUserReceiveComplimentsService";

export class ListUserReceiveComplimentsController {
    async handle(req: Request, res: Response) {
        const userId = res.locals.userId as string;

        const complimentsList = await new ListUserReceiveComplimentsService().exec(userId)

        return res.status(200).send({ complimentsList });
    }
}