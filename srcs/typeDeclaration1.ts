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

// Enum
export enum CustomerType{
    REGULAR, GOLD, PLATINUM
}
export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}