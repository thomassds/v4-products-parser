import * as path from "path";
import { DataSource, DataSourceOptions } from "typeorm";
import { Service } from "typedi";
import { InfraEnvs } from "../envs";

type DatabaseType = "mongodb";

export interface IDBConnection {
    instance: DataSource;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}

@Service()
export class TypeORMConnection implements IDBConnection {
    private _instance: DataSource | undefined;

    async connect(): Promise<void> {
        const entitiesDir = path.join("dist", "domain", "entities", "*.js");

        this._instance = new DataSource({
            type: InfraEnvs.database.type as DatabaseType,
            url: InfraEnvs.database.ulr,
            logging: false,
            entities: [entitiesDir],
        });

        await this._instance.initialize();
    }

    async disconnect(): Promise<void> {
        if (this._instance) {
            await this._instance.destroy();
        } else {
            throw new Error("Database connection is not initialized.");
        }
    }

    public get instance(): DataSource {
        if (!this._instance) {
            throw new Error("Database connection is not initialized.");
        }
        return this._instance;
    }
}
