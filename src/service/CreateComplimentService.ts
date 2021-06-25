import { getCustomRepository } from "typeorm";
import { ComplimentsRepo } from "../repositories/ComplimentsRepo";
import { UsersRepo } from "../repositories/UsersRepo";

interface IComplimentRequest {
    tagId: string;
    senderUserId: string;
    receiverUserId: string;
    message: string;
}
export class CreateComplimentService {
    async exec({ tagId, senderUserId, receiverUserId, message }: IComplimentRequest){
        const complimentRepo = getCustomRepository(ComplimentsRepo);
        const userRepo = getCustomRepository(UsersRepo);

        if (senderUserId === receiverUserId){
            throw new Error("You can't praise yourself. ＼（〇_ｏ）／");
        }

        const receiverUser = await userRepo.findOne(receiverUserId);

        if (!receiverUser) {
            throw new Error("User Receiver does not exists!");
        }

        const compliment = complimentRepo.create({
            tagId,
            message,
            senderUserId,
            receiverUserId,
        })

        await complimentRepo.save(compliment);

        return compliment;
    }
}