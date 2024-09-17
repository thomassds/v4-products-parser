import Container, { Service } from "typedi";
import { FilterProductDTO, PaginatedResponse } from "../../application/dtos";
import { Product } from "../../domain/entities";
import { ISelectAllProductRepository } from "../../domain/repositories";
import { FindManyOptions, Repository } from "typeorm";
import { TypeORMConnection } from "../database/connection";
import { DatabaseError } from "../../interfaces/exceptions";

@Service()
export class SelectAllProductRepository implements ISelectAllProductRepository {
    private repository: Repository<Product>;

    private dataSource: TypeORMConnection;

    constructor() {
        this.dataSource = Container.get(TypeORMConnection);

        this.repository = this.dataSource.instance.getRepository(Product);
    }

    async execute(
        options: FindManyOptions
    ): Promise<PaginatedResponse<Product>> {
        try {
            const [data, count] = await this.repository.findAndCount(options);

            return {
                data,
                totalRows: count,
                totalPages: options.skip ? Math.ceil(count / options.skip) : 1,
                perPage: options.take || data.length,
                page: (options?.skip || 0) / (options?.take || 0) + 1,
            };
        } catch (error) {
            throw new DatabaseError("Fail to get all products");
        }
    }
}
