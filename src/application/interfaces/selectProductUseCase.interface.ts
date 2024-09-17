import { Product } from "../../domain/entities";

export interface ISelectProductUseCase {
    execute(id: string): Promise<Product>;
}
