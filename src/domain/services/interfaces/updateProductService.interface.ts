import { UpdateProductDTO } from "../../../application/dtos";

export interface IUpdateProductService {
    execute(id: string, data: UpdateProductDTO): Promise<void>;
}
