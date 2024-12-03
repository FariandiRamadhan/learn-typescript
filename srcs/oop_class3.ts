/**
 * In Typescript we can set variable visibility to restrict access scope
 * There are 3 visibility : public(default), protected, private
 */
export class Computer {
    public name: string = "";
    protected macAddress: string = "";

    constructor(public isAccessible: boolean = false){
    }
    
    protected getIpAddress(value: string): string{
        return this.macAddress + value;
    }

    private uuid():string{
        return "uuid:x06";
    }

    public accessPrivate(): string{
        if(this.isAccessible){
            return this.uuid();
        }
        return "";
    }
}
export class Driver extends Computer{
    public getIpAddress(value: string): string {
        return this.macAddress + this.name + "::" + value;
    }
}

// Polymorphism
export class Transport{
    constructor(public v_name: string){

    }
}

export class Vehicle extends Transport{}

/**
 * Abstract Class
 * Cannot turned into object with keyword new
 * Can only be used as parent class
 */
export abstract class Customer{
    readonly id: number;
    abstract name: string;

    constructor(id: number){
        this.id = id
    }
    abstract sayHello(name: string): void
}

export class Coupon extends Customer{
    name: string;
    constructor(id: number, name: string){
        super(id);
        this.name = name;
    }
    sayHello(name: string): void {
        console.log(`${this.name} Coupon Id is ${name}`);
    }

}