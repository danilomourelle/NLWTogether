import { getCustomRepository } from "typeorm";
import { TagRepo } from "../repositories/TagRepo";

export class CreateTagService {
    async exec(name: string) {
        const tagsRepo = getCustomRepository(TagRepo);

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