import { Inject, Service } from "typedi";
import { Product } from "../entities";
import { ISelectProductService } from "./interfaces";
import { ISelectProductRepository } from "../repositories";
import { SelectProductRepository } from "../../infraestructure/repositories";
import { ObjectId } from "mongodb";

@Service()
export class SelectProductService implements ISelectProductService {
    constructor(
        @Inject(() => SelectProductRepository)
        private readonly selectProductRepository: ISelectProductRepository
    ) {}

    async execute(id: string): Promise<Product> {
        const response = await this.selectProductRepository.execute(
            new ObjectId(id)
        );

        return response;
    }
}
