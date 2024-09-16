import { FilterProductDTO, PaginatedResponse } from "../../../application/dtos";
import { Product } from "../../entities";

export interface ISelectAllProductService {
    execute(filter: FilterProductDTO): Promise<PaginatedResponse<Product>>;
}
