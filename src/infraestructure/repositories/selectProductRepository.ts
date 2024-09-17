import Container, { Service } from "typedi";
import { Product } from "../../domain/entities";
import { ISelectProductRepository } from "../../domain/repositories";
import { Repository } from "typeorm";
import { TypeORMConnection } from "../database/connection";
import { DatabaseError } from "../../interfaces/exceptions";
import { ObjectId } from "mongodb";

@Service()
export class SelectProductRepository implements ISelectProductRepository {
    private repository: Repository<Product>;

    private dataSource: TypeORMConnection;

    constructor() {
        this.dataSource = Container.get(TypeORMConnection);

        this.repository = this.dataSource.instance.getRepository(Product);
    }

    async execute(id: string): Promise<Product> {
        try {
            const objectId = new ObjectId(id);

            const response = await this.repository.findOneByOrFail({
                id: objectId,
            });

            return response;
        } catch (error) {
            throw new DatabaseError("Fail to get this product");
        }
    }
}
