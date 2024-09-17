import Container, { Service } from "typedi";
import { Product } from "../../domain/entities";
import { IUpdateProductRepository } from "../../domain/repositories";
import { ObjectId, Repository } from "typeorm";
import { TypeORMConnection } from "../database/connection";
import { DatabaseError } from "../../interfaces/exceptions";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

@Service()
export class UpdateProductRepository implements IUpdateProductRepository {
    private repository: Repository<Product>;

    private dataSource: TypeORMConnection;

    constructor() {
        this.dataSource = Container.get(TypeORMConnection);

        this.repository = this.dataSource.instance.getRepository(Product);
    }

    async execute(
        id: ObjectId,
        data: QueryDeepPartialEntity<Product>
    ): Promise<void> {
        try {
            await this.repository.update({ _id: id }, data);

            return;
        } catch (error) {
            throw new DatabaseError("Fail to update this product");
        }
    }
}
