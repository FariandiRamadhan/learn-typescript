// Supported Datatype alias : primitive, array, object
// Supported Datatype interface : mainly object
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
/**
 * Union        : type | type
 * intersection : type & type ( work like merging ) 
 * const IntersectType : {name: string} & {address: string} = {name: 'foo', address: 'bar'}
 */

// Enum
export enum CustomerType{
    REGULAR, GOLD, PLATINUM
}
export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}