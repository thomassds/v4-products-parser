export interface IDeleteProductService {
    execute(id: string): Promise<void>;
}
