import { getCustomRepository } from "typeorm";
import { UsersRepo } from "../repositories/UsersRepo";

interface UserRequest {
    name: string;
    email: string;
    admin?: boolean
}

export class CreateUserService {
    async exec({ name, email, admin }: UserRequest) {
        const usersRepo = getCustomRepository(UsersRepo);

        if (!email) {
            throw new Error('Email incorrect');
        }

        const userAlreadyExists = await usersRepo.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error('User already exists');
        }

        const user = usersRepo.create({
            name, email, admin
        });

        await usersRepo.save(user);

        return user;
    }
}