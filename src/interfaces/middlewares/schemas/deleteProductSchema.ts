import * as Joi from "joi";
import { SchemaValidator } from "../routerValidator";

export class DeleteProductSchema {
    static rules(): SchemaValidator {
        return {
            params: Joi.object({
                id: Joi.string().required(),
            }),
        };
    }
}
