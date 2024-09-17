import { ObjectId } from "mongodb";
import { Product } from "../entities";

export interface ISelectProductRepository {
    execute(id: ObjectId): Promise<Product>;
}
