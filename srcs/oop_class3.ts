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
