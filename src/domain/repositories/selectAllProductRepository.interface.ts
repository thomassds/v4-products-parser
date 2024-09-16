import { FindManyOptions } from "typeorm";
import { PaginatedResponse } from "../../application/dtos";
import { Product } from "../entities";

export interface ISelectAllProductRepository {
    execute(options: FindManyOptions): Promise<PaginatedResponse<Product>>;
}
