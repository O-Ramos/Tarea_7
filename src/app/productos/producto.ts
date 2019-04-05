export class Producto {
    constructor(
    public id: number,
    public modelo: string,
    public marca: string,
    public categoria: string,
    public precio: number,
    public existencia: number,
    ) {}
}
