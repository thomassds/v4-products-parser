import { Product } from "../../entities";

export interface ISelectProductService {
    execute(id: string): Promise<Product>;
}
