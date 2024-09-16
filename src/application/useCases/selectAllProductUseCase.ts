import { Inject, Service } from "typedi";

import { ISelectAllProductUseCase } from "../interfaces";

import { FilterProductDTO, PaginatedResponse } from "../dtos";

import { Product } from "../../domain/entities";

import { SelectAllProductService } from "../../domain/services";
import { ISelectAllProductService } from "../../domain/services/interfaces";

@Service()
export class SelectAllProductUseCase implements ISelectAllProductUseCase {
    constructor(
        @Inject(() => SelectAllProductService)
        private readonly selectAllProductService: ISelectAllProductService
    ) {}

    async execute(
        filter: FilterProductDTO
    ): Promise<PaginatedResponse<Product>> {
        const response = await this.selectAllProductService.execute(filter);

        return response;
    }
}
