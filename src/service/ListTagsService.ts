import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { TagsRepo } from "../repositories/TagsRepo";

export class ListTagsServices {
    async exec() {
        const tagsRepo = getCustomRepository(TagsRepo);

        const tagsList = tagsRepo.find();

        return classToPlain(tagsList);
    }
}