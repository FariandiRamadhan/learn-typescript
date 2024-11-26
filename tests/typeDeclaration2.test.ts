import {Person, identity} from '../srcs/typeDeclaration2';
describe('type declaration2', function (): void {
    it("should use intersection type", function(){
        const personObj: Person = {
            id: 99,
            name: "Bar"
        }
        expect(personObj.name).toBe("Bar");
    });
    it("should use type assertion", function (){
        const myIdentity: Person = identity as Person
        expect(myIdentity.name).toBe("baz");
    })
    // it("should print extendable interface", function (){

    //     expect(hr.numberOfEmployee).toBe(5);
    // })
});