import { Service } from "typedi";

@Service()
export class DataImportManager {
    constructor() {}

    async execute() {
        return console.log("teste");
    }
}
