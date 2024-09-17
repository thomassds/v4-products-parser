import { Router } from "express";
import Container from "typedi";
import { ProductController } from "../../controllers/productController";

export class ProductRouter {
    static getRouter(): Router {
        const controller = Container.get(ProductController);

        const router = Router();

        router.post("/products", (req, res) =>
            controller.handleCreate(req, res)
        );

        router.get("/products", (req, res) =>
            controller.handleSelectAll(req, res)
        );

        router.get("/products/:id", (req, res) =>
            controller.handleSelect(req, res)
        );

        return router;
    }
}
