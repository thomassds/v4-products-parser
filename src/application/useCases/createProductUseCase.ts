import { Inject, Service } from "typedi";

import { ICreateProductUseCase } from "../interfaces";

import { CreateProductDTO } from "../dtos";

import { Product } from "../../domain/entities";

import { CreateProductService } from "../../domain/services";
import { ICreateProductService } from "../../domain/services/interfaces";

@Service()
export class CreateProductUseCase implements ICreateProductUseCase {
    constructor(
        @Inject(() => CreateProductService)
        private readonly createProductService: ICreateProductService
    ) {}

    async execute(data: CreateProductDTO): Promise<Product> {
        const response = await this.createProductService.execute(data);

        return response;
    }
}
