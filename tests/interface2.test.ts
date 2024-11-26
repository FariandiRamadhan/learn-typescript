import {Person} from '../srcs/interface2';
describe('Interface declaration2', function (): void {
    it("should declare function interface", function(){
        const personObj: Person = {
            id: 1,
            func(name) {
                return "Hello " + name;
            },
        }
        expect(personObj.func("Foo")).toBe("Hello Foo");
    });
    // it("should print array or object", function (){

    //     expect(obj["key"]).toBe("foo");
    // })
    // it("should print extendable interface", function (){

    //     expect(hr.numberOfEmployee).toBe(5);
    // })
});