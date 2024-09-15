import express, { Express } from "express";

import "express-async-errors";
import cors from "cors";
import Container from "typedi";
import { TypeORMConnection } from "./database/connection";
import { CronJob } from "../schedule";

export class App {
    static async build() {
        const app: Express = express();
        const database = Container.get(TypeORMConnection);
        const cronJob = Container.get(CronJob);

        await database.connect();

        app.use(cors());

        cronJob.execute();
        return app;
    }
}
