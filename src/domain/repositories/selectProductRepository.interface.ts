import { ObjectId } from "typeorm";
import { Product } from "../entities";

export interface ISelectProductRepository {
    execute(id: ObjectId): Promise<Product>;
}
