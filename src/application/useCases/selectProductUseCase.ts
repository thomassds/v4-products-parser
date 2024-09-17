import { Inject, Service } from "typedi";

import { ISelectProductUseCase } from "../interfaces";

import { Product } from "../../domain/entities";

import { SelectProductService } from "../../domain/services";
import { ISelectProductService } from "../../domain/services/interfaces";

@Service()
export class SelectProductUseCase implements ISelectProductUseCase {
    constructor(
        @Inject(() => SelectProductService)
        private readonly selectProductService: ISelectProductService
    ) {}

    async execute(id: string): Promise<Product> {
        const response = await this.selectProductService.execute(id);

        return response;
    }
}
