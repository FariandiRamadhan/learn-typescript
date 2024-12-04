/**
 * Static property in Typescript
 * A static member can't accessing non static member 
 * A non static member / properties can access static member
 */

export class Configuration{
    static DBNAME: string = "mysql";
    static DBPORT: number = 3306;
    static DBUSER: string = "root";
    static DBPASSWD: string = "root";
    static CONNECTIONTIMEOUT(...values: number[]): number{
        let total = 0;
        for(let i: number = 0; i < values.length; i++){
            total += values[i];
        }
        return total;
    }
}

/**
 * Error Handling (By extending Error Class)
 */

export class ExceptionNumber extends Error{
    constructor(public message: string){
        super(message);
    }
}