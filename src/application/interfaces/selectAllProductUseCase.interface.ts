import { Product } from "../../domain/entities";
import { FilterProductDTO, PaginatedResponse } from "../dtos";

export interface ISelectAllProductUseCase {
    execute(filter: FilterProductDTO): Promise<PaginatedResponse<Product>>;
}
