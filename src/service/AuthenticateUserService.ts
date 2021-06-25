import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepo } from "../repositories/UsersRepo";

export class AuthenticateUserService {
    async exec(email: string, password: string) {
        const userRepo = getCustomRepository(UsersRepo);

        const user = await userRepo.findOne({ email });

        if (!user) {
            throw new Error("Credentials Invalid");
        }

        const isPassValid = await compare(password, user.password);
        if (!isPassValid) {
            throw new Error("Credentials Invalid");
        }

        const token = sign(
            {
                email: user.email
            },
            "chaveSuperSecreta",
            {
                subject: user.id,
                expiresIn: '1d'
            })

            return token;
    }
}