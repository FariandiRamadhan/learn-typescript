import {Seller, SumValue, StringArray, StringObject, Employee, Manager} from "../srcs/interface1";
describe('Interface declaration', function (): void {
    it("should declare interface", function(){
        const seller: Seller = {
            id: 10,
            name: "baz",
            id2: "lorem",
            id3: "ipsum"
        }
        seller.id = 20;
        // cannot assign because it's a read-only property
        // seller.id2 = "dolor sit amet"

        const addTwo: SumValue = (val1: number, val2: number):number => {
            return val1 + val2;
        }
        expect(addTwo(2, 5)).toBe(7)
    });
    it("should print array or object", function (){
        // indexed array
        const arr: StringArray = ["foo", "bar", "baz"];

        // indexed object
        const obj: StringObject = {
            key: "foo",
            name2: "bar"
        };

        expect(arr[0]).toBe("foo");
        expect(obj["key"]).toBe("foo");
    })
    it("should print extendable interface", function (){

        const employees: Employee = {
            id: 1,
            name: "baz",
            division: "IT"
        }
        const hr: Manager = {
            id: 100,
            name: "foo",
            division: "Human Resource",
            numberOfEmployee: 5
        }

        expect(employees.division).toBe("IT");
        expect(hr.numberOfEmployee).toBe(5);
    })
});