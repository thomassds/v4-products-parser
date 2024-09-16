import { FilterDTO } from "./filter.dto";

export interface FilterProductDTO extends FilterDTO {
    productName?: string;
}
