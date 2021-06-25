import { Request, Response } from "express";
import { AuthenticateUserService } from "../service/AuthenticateUserService";

export class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const authUserService = new AuthenticateUserService();

        const token = await authUserService.exec(email, password)

        return res.status(200).send({ token });
    }
}