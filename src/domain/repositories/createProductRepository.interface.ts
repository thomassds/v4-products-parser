import { CreateProductDTO } from "../../application/dtos";
import { Product } from "../entities";

export interface ICreateProductRepository {
    execute(data: CreateProductDTO): Promise<Product>;
}
