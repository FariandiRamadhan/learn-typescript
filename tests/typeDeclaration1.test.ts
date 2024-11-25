import {Category, Product, Customer, CustomerType, OptionalProperty} from "../srcs/typeDeclaration1";
describe('Datatype declaration', function (): void {
    it("should declare datatype", function(){

        // variableName:datatype = value
        // You can declare a variable without explicitly write its datatype

        // primitive datatype
        let description = "Test";
        let name:string = "Rian";
        let age:number = 25;
        let married:boolean = false;

        // Typescript keeps variable's datatype consistent
        // name = 4; //error

        // array
        let names: string[] = ["foo", "bar", "fosh"];
        let ages: number[] = [40, 20, 30];

        // Readonly array (cannot be change)
        const hobbies: ReadonlyArray<string> = ["read","cook"];
        // hobbies[0] = "swim";

        // Tuple (readonly, size determined)
        const foods: readonly [string, string] = ["kebab","popcorn"];

        // any (datatype can change freely)
        const drinks: any ={}

        // union type (the value can change based on datatype we provide)
        // pay attention on function with union type
        let code: number | string | boolean = "B13fe";
        code = 1300;
        code = false;

        // Type alias
        const category: Category = {
            id: "AE",
            name: "shoes"
        }
        const product: Product = {
            id: "1",
            price: 100000,
            category: category
            // errors :
            // uncomplete property
            // new assign property
            // category: 1
        }
        const Opt:OptionalProperty = {
            id: 7,
            name: "bar"
            // description is optional
        }

        // Object Type
        const person: {id:number, name:string} = {
            id: 10,
            name: "foo"
        }
        
        // Enum
        const customer: Customer = {
            id: 1,
            name: "Bar",
            type: CustomerType.GOLD
        }

    });
});