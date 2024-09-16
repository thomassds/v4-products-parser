import { Router } from "express";
import { ProductRouter } from "./routers/productRouter";

export const getRoutes = () => {
    const router = Router();

    const routers = [ProductRouter];

    routers.forEach((routerClass) => {
        router.use(routerClass.getRouter());
    });

    return router;
};
