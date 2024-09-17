import { Router } from "express";
import Container from "typedi";
import { ProductController } from "../../controllers";
import { Authenticated, RouterValidator } from "../../middlewares";
import {
    CreateProductSchema,
    DeleteProductSchema,
    SelectAllProductSchema,
    SelectProductSchema,
    UpdateProductSchema,
} from "../../middlewares/schemas";

export class ProductRouter {
    static getRouter(): Router {
        const controller = Container.get(ProductController);
        const auth = Container.get(Authenticated);
        const routerValidator = Container.get(RouterValidator);

        const router = Router();

        router.post(
            "/products",
            auth.execute,
            routerValidator.execute(CreateProductSchema.rules()),
            (req, res) => controller.handleCreate(req, res)
        );

        router.get(
            "/products",
            auth.execute,
            routerValidator.execute(SelectAllProductSchema.rules()),
            (req, res) => controller.handleSelectAll(req, res)
        );

        router.get(
            "/products/:id",
            auth.execute,
            routerValidator.execute(SelectProductSchema.rules()),
            (req, res) => controller.handleSelect(req, res)
        );

        router.put(
            "/products/:id",
            auth.execute,
            routerValidator.execute(UpdateProductSchema.rules()),
            (req, res) => controller.handleUpdate(req, res)
        );

        router.delete(
            "/products/:id",
            auth.execute,
            routerValidator.execute(DeleteProductSchema.rules()),
            (req, res) => controller.handleDelete(req, res)
        );

        return router;
    }
}
