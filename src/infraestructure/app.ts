import express, { Express } from "express";

import "express-async-errors";
import cors from "cors";
import Container, { Service } from "typedi";
import { TypeORMConnection } from "./database/connection";
import { CronJob } from "../schedule";
import { AppRouters } from "../interfaces/routes";
import { AppCors } from "../interfaces/cors";
import { AppBodyParse } from "../interfaces/bodyParse";

@Service()
export class App {
    private app: Express;
    private database: TypeORMConnection;
    private cronJob: CronJob;

    constructor() {
        this.app = express();
        this.database = Container.get(TypeORMConnection);
        this.cronJob = Container.get(CronJob);
    }

    async build() {
        await this.database.connect();

        AppBodyParse.load(this.app);

        AppCors.load(this.app);

        AppRouters.load(this.app);

        AppRouters.loadErrors(this.app);

        this.cronJob.load();

        return this.app;
    }
}
