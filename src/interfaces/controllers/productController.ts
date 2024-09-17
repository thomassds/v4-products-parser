import { Request, Response } from "express";

import { Inject, Service } from "typedi";

import {
    CreateProductUseCase,
    SelectAllProductUseCase,
    SelectProductUseCase,
    UpdateProductUseCase,
    DeleteProductUseCase,
} from "../../application/useCases";
import {
    ICreateProductUseCase,
    ISelectAllProductUseCase,
    ISelectProductUseCase,
    IUpdateProductUseCase,
    IDeleteProductUseCase,
} from "../../application/interfaces";

@Service()
export class ProductController {
    constructor(
        @Inject(() => CreateProductUseCase)
        private readonly createProductUseCase: ICreateProductUseCase,
        @Inject(() => SelectAllProductUseCase)
        private readonly selectAllProductUseCase: ISelectAllProductUseCase,
        @Inject(() => SelectProductUseCase)
        private readonly selectProductUseCase: ISelectProductUseCase,
        @Inject(() => UpdateProductUseCase)
        private readonly updateProductUseCase: IUpdateProductUseCase,
        @Inject(() => DeleteProductUseCase)
        private readonly deleteProductUseCase: IDeleteProductUseCase
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

    async handleSelect(req: Request, res: Response) {
        const { id } = req.params;

        const response = await this.selectProductUseCase.execute(id);

        return res.status(200).json(response);
    }

    async handleUpdate(req: Request, res: Response) {
        const { id } = req.params;

        const response = await this.updateProductUseCase.execute(id, req.body);

        return res.status(200).json(response);
    }

    async handleDelete(req: Request, res: Response) {
        const { id } = req.params;

        const response = await this.deleteProductUseCase.execute(id);

        return res.status(200).json(response);
    }
}
