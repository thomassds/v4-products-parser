import { ObjectId } from "typeorm";
import { Product } from "../entities";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export interface IUpdateProductRepository {
    execute(id: ObjectId, data: QueryDeepPartialEntity<Product>): Promise<void>;
}
