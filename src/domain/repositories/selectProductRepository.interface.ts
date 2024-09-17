import { Product } from "../entities";

export interface ISelectProductRepository {
    execute(id: string): Promise<Product>;
}
