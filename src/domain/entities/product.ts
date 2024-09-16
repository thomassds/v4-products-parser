import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectId } from "mongodb";
import { ProductStatusEnum } from "../enums/ProductEnum";

@Entity("products")
export class Product {
    @ObjectIdColumn()
    id?: ObjectId;

    @Column()
    code: number;

    @Column()
    status: ProductStatusEnum;

    @Column()
    importedT?: Date;

    @Column()
    url: string;

    @Column()
    creator: string;

    @Column()
    createdT: number;

    @Column()
    lastModifiedT: number;

    @Column()
    productName: string;

    @Column()
    quantity: string;

    @Column()
    brands: string;

    @Column()
    categories: string;

    @Column()
    labels: string;

    @Column()
    cities: string;

    @Column()
    purchasePlaces: string;

    @Column()
    stores: string;

    @Column()
    ingredientsText: string;

    @Column()
    traces: string;

    @Column()
    servingSize: string;

    @Column()
    servingQuantity: number;

    @Column()
    nutriscoreScore: number;

    @Column()
    nutriscoreGrade: string;

    @Column()
    mainCategory: string;

    @Column()
    imageUrl: string;
}
