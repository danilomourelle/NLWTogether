import { EntityRepository, Repository } from "typeorm";
import { Compliments } from "../entities/Compliment";

@EntityRepository(Compliments)
export class ComplimentsRepo extends Repository<Compliments> {

}