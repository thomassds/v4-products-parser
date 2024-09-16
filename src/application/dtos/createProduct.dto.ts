import { ProductStatusEnum } from "../../domain/enums";

export interface CreateProductDTO {
    code: number;
    status: ProductStatusEnum;
    importedT: string;
    url: string;
    creator: string;
    createdT: number;
    lastModifiedT: number;
    productName: string;
    quantity: string;
    brands: string;
    categories: string;
    labels: string;
    cities: string;
    purchasePlaces: string;
    stores: string;
    ingredientsText: string;
    traces: string;
    servingSize: string;
    servingQuantity: number;
    nutriscoreScore: number;
    nutriscoreGrade: string;
    mainCategory: string;
    imageUrl: string;
}
