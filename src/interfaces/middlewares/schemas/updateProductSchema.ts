import * as Joi from "joi";
import { SchemaValidator } from "../routerValidator";
import { ProductStatusEnum } from "../../../domain/enums";

export class UpdateProductSchema {
    static rules(): SchemaValidator {
        return {
            params: Joi.object({ id: Joi.string().required() }),
            body: Joi.object({
                code: Joi.number(),
                status: Joi.string().valid(...Object.values(ProductStatusEnum)),
                importedT: Joi.string().isoDate(),
                url: Joi.string().uri(),
                creator: Joi.string(),
                createdT: Joi.number(),
                lastModifiedT: Joi.number(),
                productName: Joi.string(),
                quantity: Joi.string(),
                brands: Joi.string(),
                categories: Joi.string(),
                labels: Joi.string(),
                cities: Joi.string().allow(null, ""),
                purchasePlaces: Joi.string().allow(null, ""),
                stores: Joi.string().allow(null, ""),
                ingredientsText: Joi.string(),
                traces: Joi.string().allow(null, ""),
                servingSize: Joi.string(),
                servingQuantity: Joi.number(),
                nutriscoreScore: Joi.number(),
                nutriscoreGrade: Joi.string(),
                mainCategory: Joi.string(),
                imageUrl: Joi.string().uri(),
            }),
        };
    }
}
