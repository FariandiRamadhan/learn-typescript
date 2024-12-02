// Typescript support extend class
export class Person{
    readonly id: string;
    name: string;

    constructor(id:string, name: string){
        this.id = id;
        this.name = name;
    }
}
export class Belonging extends Person{
    color?: string;
    isClear: boolean;

    constructor(id : string, name : string, isClear : boolean){
        // constructor with derived classes must call super
        super(id, name);
        this.isClear = isClear;
    }

    passCheck():string{
        return `Person with id ${this.id} : ${this.name}, 
        check result : ${this.color} : ${this.isClear}`
    }
}

/** Typescript support implement class
 * We can implement more than one class
 */
interface Item{
    id: number;
}
interface ItemDetail{
    showItemName(name: string):String
}

export class ShowItem implements Item, ItemDetail{
    id: number;
    constructor(name: number){
        this.id = name;
    }

    showItemName(name: string): String {
        return `this is : ${name} with id : ${this.id}`;
    }
}


// Method overriding and super method
class Car {
    name: string;
    licenseId?: number;
    constructor(name: string){
        this.name = name;
    }

    carName(name: string): String {
        return `Car Name : ${name}`;
    }

    carLicense(license: number): String {
        this.licenseId = license;
        return `Car licenseId : ${this.licenseId}`;
    }
}

export class Part extends Car{
    // Part Class should inherit parent property (name)
    carName(name: string): String {
        return `Car Name : ${name} @2`;
    }
    carLicense(licenseId: number): String {
        const superFunc: String = super.carLicense(licenseId);
        return superFunc + " Status: Good";
    }
}