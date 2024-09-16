import { ObjectId } from "typeorm";
import { Product } from "../entities";

export interface IDeleteProductRepository {
    execute(id: ObjectId): Promise<Product>;
}
