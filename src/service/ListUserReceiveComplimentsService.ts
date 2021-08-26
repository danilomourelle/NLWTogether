import { getCustomRepository } from "typeorm";
import { ComplimentsListModel } from "../model/ComplimentsListModel";
import { ComplimentsRepo } from "../repositories/ComplimentsRepo";

export class ListUserReceiveComplimentsService {
    async exec(userId: string) {
        const complimentsRepo = getCustomRepository(ComplimentsRepo);

        const complimentsList = await complimentsRepo.find({
            where : {
                receiverUserId: userId,
            },
            relations: ["receiverUser", "senderUser", "tag"]
        })

        const beautyList = new ComplimentsListModel().transform(complimentsList)

        return beautyList;
    }
}