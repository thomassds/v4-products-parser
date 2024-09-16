import { Request, Response } from "express";

import { Inject, Service } from "typedi";

import {
    CreateProductUseCase,
    SelectAllProductUseCase,
} from "../../application/useCases";
import {
    ICreateProductUseCase,
    ISelectAllProductUseCase,
} from "../../application/interfaces";

@Service()
export class ProductController {
    constructor(
        @Inject(() => CreateProductUseCase)
        private readonly createProductUseCase: ICreateProductUseCase,
        @Inject(() => SelectAllProductUseCase)
        private readonly selectAllProductUseCase: ISelectAllProductUseCase
    ) {}

    async handleCreate(req: Request, res: Response) {
        const data = req.body;

        const response = await this.createProductUseCase.execute(data);

        return res.status(200).json(response);
    }

    async handleSelectAll(req: Request, res: Response) {
        const query = req.query as any;

        if (query.page) query.page = Number(query.page);

        if (query.perPage) query.perPage = Number(query.perPage);

        const response = await this.selectAllProductUseCase.execute({
            ...query,
            page: query.page,
            perPage: query.perPage,
        });

        return res.status(200).json(response);
    }
}
