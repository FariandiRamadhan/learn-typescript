// Type alias
export type Category = {
    id:string,
    name:string
}
export type Product = {
    id:string,
    price:number
    category: Category
}
export type OptionalProperty = {
    id: number,
    name: string,
    description?: string
}

// Enum
export enum CustomerType{
    REGULAR, GOLD, PLATINUM
}
export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}