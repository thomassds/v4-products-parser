import { UpdateProductDTO } from "../dtos";

export interface IUpdateProductUseCase {
    execute(id: string, data: UpdateProductDTO): Promise<void>;
}
