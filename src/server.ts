import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import { router } from './routes';

import './database'

const app = express();

app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).send({ error: err.message })
    }

    res.status(500).send({
        status: -1,
        message: 'err.message'
    })
})

app.listen(5000, () => {
    console.log("Server is running! 🚀")
})