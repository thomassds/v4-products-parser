import { Inject, Service } from "typedi";
import { Product } from "../entities";
import { ISelectAllProductService } from "./interfaces";
import { ISelectAllProductRepository } from "../repositories";
import { FilterProductDTO, PaginatedResponse } from "../../application/dtos";
import { SelectAllProductRepository } from "../../infraestructure/repositories";

@Service()
export class SelectAllProductService implements ISelectAllProductService {
    constructor(
        @Inject(() => SelectAllProductRepository)
        private readonly selectAllProductRepository: ISelectAllProductRepository
    ) {}

    async execute({
        page,
        perPage,
        productName,
    }: FilterProductDTO): Promise<PaginatedResponse<Product>> {
        const where: any = {};

        if (productName) where.productName = new RegExp(productName, "i");

        const skip = page ? (page - 1) * (perPage || 1) : 0;
        const take = perPage || 10;

        const response = await this.selectAllProductRepository.execute({
            where,
            skip,
            take,
        });

        return response;
    }
}
