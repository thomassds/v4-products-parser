import { Inject, Service } from "typedi";
import { IUpdateProductService } from "./interfaces";
import { IUpdateProductRepository } from "../repositories";
import { UpdateProductDTO } from "../../application/dtos";
import { UpdateProductRepository } from "../../infraestructure/repositories";
import { ObjectId } from "mongodb";

@Service()
export class UpdateProductService implements IUpdateProductService {
    constructor(
        @Inject(() => UpdateProductRepository)
        private readonly updateProductRepository: IUpdateProductRepository
    ) {}

    async execute(id: string, data: UpdateProductDTO): Promise<void> {
        const response = await this.updateProductRepository.execute(
            new ObjectId(id),
            data
        );

        return response;
    }
}
