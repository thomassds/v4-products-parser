import { Inject, Service } from "typedi";
import { IDeleteProductService } from "./interfaces";
import { IUpdateProductRepository } from "../repositories";
import { UpdateProductRepository } from "../../infraestructure/repositories";
import { ObjectId } from "mongodb";
import { ProductStatusEnum } from "../enums";

@Service()
export class DeleteProductService implements IDeleteProductService {
    constructor(
        @Inject(() => UpdateProductRepository)
        private readonly updateProductRepository: IUpdateProductRepository
    ) {}

    async execute(id: string): Promise<void> {
        const response = await this.updateProductRepository.execute(
            new ObjectId(id),
            {
                status: ProductStatusEnum.TRASH,
            }
        );

        return response;
    }
}
