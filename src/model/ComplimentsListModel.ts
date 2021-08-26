import { Compliments } from "../entities/Compliment";

interface IComplimentsModel {
    sender: string;
    receiver: string;
    tag: string;
    compliment: string;
}

export class ComplimentsListModel {
    transform(complimentsList: Compliments[]): IComplimentsModel[] {

        const response = complimentsList.map(compliment => {
            return {
                sender: compliment.senderUser.name,
                receiver: compliment.receiverUser.name,
                tag: compliment.tag.name,
                compliment: compliment.message,
            }
        })

        return response
    } 
}