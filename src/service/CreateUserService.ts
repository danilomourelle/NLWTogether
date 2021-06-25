import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
import { UsersRepo } from "../repositories/UsersRepo";

interface UserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
}

export class CreateUserService {
    async exec({ name, email, password, admin = false }: UserRequest) {
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

        const hashedPass = await hash(password, 8)
        const user = usersRepo.create({
            name, 
            email, 
            password: hashedPass, 
            admin
        });

        await usersRepo.save(user);

        return user;
    }
}