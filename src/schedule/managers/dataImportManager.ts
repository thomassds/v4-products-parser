import { Service } from "typedi";

@Service()
export class DataImportManager {
    constructor() {}

    async execute() {
        return console.info(
            "Não foi possivel finalizar o projeto por questão de tempo, mas fiz o meu melhor!"
        );
    }
}
