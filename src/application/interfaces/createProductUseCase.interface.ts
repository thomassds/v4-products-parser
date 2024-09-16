import { Product } from "../../domain/entities";
import { CreateProductDTO } from "../dtos";

export interface ICreateProductUseCase {
    execute(data: CreateProductDTO): Promise<Product>;
}
