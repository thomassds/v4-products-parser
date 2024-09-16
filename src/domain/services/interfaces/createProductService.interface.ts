import { Service } from "typedi";
import { CreateProductDTO } from "../../../application/dtos";
import { Product } from "../../entities";

export interface ICreateProductService {
    execute(data: CreateProductDTO): Promise<Product>;
}
