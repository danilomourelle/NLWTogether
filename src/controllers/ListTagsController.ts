import { Request, Response } from "express";
import { ListTagsServices } from "../service/ListTagsService";

export class ListTagsController {
    async handle(req: Request, res: Response) {
        const tags = await new ListTagsServices().exec()

        return res.send({tags})
    }
}