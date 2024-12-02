/* Class component in typscript
* var_name:Class = new Object()
* Property : Optional, Mandatory, ReadOnly
* Default value property : var_name:datatype = value
* We can also use setter and getter in Typescript to set property and give a validation
*/

class Employee {}
class Manager {}
export class VP {
    readonly id: number;
    firstName: string;
    lastName: string = "";
    address?: string;
    constructor(id: number, fname: string){
        this.id = id;
        this.firstName = fname;
    }

    identity(greet: string):string{
        return `Id ${this.id} matched the record. Hi, Mr. ${this.firstName} ${greet}`
    }
}

export class President {
    _rule?: string;
    set rule(value: string){
        this._rule = value !== ""? value:"";
    }
    get rule():string{
        return this._rule? this._rule:"empty";
    }
}

const employee:Employee = new Employee();
const manager:Manager = new Manager();
const vp:VP = new VP(123, "Foo");
const president:President = new President();
vp.address = "New Jersey";

// Error readonly property
// vp.id = 200;

vp.identity("good morning");

// Set _rule by setting rule
president.rule = "don't be late!";