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
});