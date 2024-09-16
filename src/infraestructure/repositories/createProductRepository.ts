import Container, { Service } from "typedi";
import { CreateProductDTO } from "../../application/dtos";
import { Product } from "../../domain/entities";
import { ICreateProductRepository } from "../../domain/repositories";
import { Repository } from "typeorm";
import { TypeORMConnection } from "../database/connection";
import { DatabaseError } from "../../interfaces/exceptions";

@Service()
export class CreateProductRepository implements ICreateProductRepository {
    private repository: Repository<Product>;

    private dataSource: TypeORMConnection;

    constructor() {
        this.dataSource = Container.get(TypeORMConnection);

        this.repository = this.dataSource.instance.getRepository(Product);
    }

    async execute(data: CreateProductDTO): Promise<Product> {
        try {
            const response = await this.repository.save(data);

            return response;
        } catch (error) {
            throw new DatabaseError("Fail to Register this Product");
        }
    }
}
