import schedule from "node-schedule";
import Container, { Service } from "typedi";
import { DataImportManager } from "./managers";

@Service()
export class CronJob {
    private dataImportManager: DataImportManager;

    constructor() {
        this.dataImportManager = Container.get(DataImportManager);
    }
    // "0 20 * * *"
    execute() {
        schedule.scheduleJob("*/6 * * * * *", async () => {
            await this.dataImportManager.execute();
        });
    }
}
