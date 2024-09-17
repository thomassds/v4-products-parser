import * as Joi from "joi";
import { SchemaValidator } from "../routerValidator";

export class SelectProductSchema {
    static rules(): SchemaValidator {
        return {
            params: Joi.object({
                id: Joi.string().required(),
            }),
        };
    }
}
