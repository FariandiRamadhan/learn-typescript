// In typescript method/function can be overloaded
// We can declare function with the same name, but have different type or have more / less parameter
// Declare templates
export function identity(value: string): string;
export function identity(value: number): number;
// function identity(value: number): string;

/*
*
* We create the function based on templates
* type any can be used
* function identity(value: any): any{
*     return `Hi, my name is ${value}`;
* }
* 
*/
export function identity(value: string | number): string | number{
    return typeof value === "string"? `Hi, my name is ${value}`: value;
}

// In Typescript, we can declare function as a parameter with type
export function paramsFunc(value: string, func: (val: string) => string){
    return `outer func string: ${func(value)}`;
}

// rest parameter
/* 
* we can use rest parameter like we did in Javascript by assign array type
* 
* function rest(...rest: string[]): string{
*    return `Hi, my name is ${value}`;
* }
*/

// NOTE : We should imported all the overrided function or not