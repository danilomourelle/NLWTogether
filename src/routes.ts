import { Router } from 'express';
import { CreateUserController } from './controlles/CreateUserController';

export const router = Router();

const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);