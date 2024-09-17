import { Inject, Service } from "typedi";

import { IUpdateProductUseCase } from "../interfaces";

import { UpdateProductDTO } from "../dtos";

import { UpdateProductService } from "../../domain/services";
import { IUpdateProductService } from "../../domain/services/interfaces";

@Service()
export class UpdateProductUseCase implements IUpdateProductUseCase {
    constructor(
        @Inject(() => UpdateProductService)
        private readonly updateProductService: IUpdateProductService
    ) {}

    async execute(id: string, data: UpdateProductDTO): Promise<void> {
        const response = await this.updateProductService.execute(id, data);

        return response;
    }
}
