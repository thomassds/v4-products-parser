import { Inject, Service } from "typedi";
import { ICreateProductService } from "./interfaces";
import { ICreateProductRepository } from "../repositories";
import { CreateProductDTO } from "../../application/dtos";
import { Product } from "../entities";
import { CreateProductRepository } from "../../infraestructure/repositories";

@Service()
export class CreateProductService implements ICreateProductService {
    constructor(
        @Inject(() => CreateProductRepository)
        private readonly createProductRepository: ICreateProductRepository
    ) {}

    async execute(data: CreateProductDTO): Promise<Product> {
        const response = await this.createProductRepository.execute(data);

        return response;
    }
}
