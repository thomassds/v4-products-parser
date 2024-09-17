import * as Joi from "joi";
import { SchemaValidator } from "../routerValidator";
import { ProductStatusEnum } from "../../../domain/enums";

export class CreateProductSchema {
    static rules(): SchemaValidator {
        return {
            body: Joi.object({
                code: Joi.number().required(),
                status: Joi.string()
                    .valid(...Object.values(ProductStatusEnum))
                    .required(),
                importedT: Joi.string().isoDate().required(),
                url: Joi.string().uri().required(),
                creator: Joi.string().required(),
                createdT: Joi.number().required(),
                lastModifiedT: Joi.number().required(),
                productName: Joi.string().required(),
                quantity: Joi.string().required(),
                brands: Joi.string().required(),
                categories: Joi.string().required(),
                labels: Joi.string().required(),
                cities: Joi.string().allow(null, ""),
                purchasePlaces: Joi.string().allow(null, ""),
                stores: Joi.string().allow(null, ""),
                ingredientsText: Joi.string().required(),
                traces: Joi.string().allow(null, ""),
                servingSize: Joi.string().required(),
                servingQuantity: Joi.number().required(),
                nutriscoreScore: Joi.number().required(),
                nutriscoreGrade: Joi.string().required(),
                mainCategory: Joi.string().required(),
                imageUrl: Joi.string().uri().required(),
            }),
        };
    }
}
