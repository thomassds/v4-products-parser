import { Inject, Service } from "typedi";

import { IDeleteProductUseCase } from "../interfaces";

import { DeleteProductService } from "../../domain/services";
import { IDeleteProductService } from "../../domain/services/interfaces";

@Service()
export class DeleteProductUseCase implements IDeleteProductUseCase {
    constructor(
        @Inject(() => DeleteProductService)
        private readonly deleteProductService: IDeleteProductService
    ) {}

    async execute(id: string): Promise<void> {
        const response = await this.deleteProductService.execute(id);

        return response;
    }
}
