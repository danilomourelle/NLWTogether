import { getCustomRepository } from "typeorm";
import { TagsRepo } from "../repositories/TagsRepo";

export class CreateTagService {
    async exec(name: string) {
        const tagsRepo = getCustomRepository(TagsRepo);

        if (!name) {
            throw new Error("Incorrect name!")
        }

        const tagAlreadyExists = await tagsRepo.findOne({
            name
        })
        if (tagAlreadyExists) {
            throw new Error("Tag already exists");
        }

        const tag = tagsRepo.create({ name })

        await tagsRepo.save(tag);

        return tag;
    }
}