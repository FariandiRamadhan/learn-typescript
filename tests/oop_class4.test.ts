import {Configuration, ExceptionNumber} from "../srcs/oop_class4";
describe("Static property from Class in Typescript", ()=>{
    // Test Error Handling
        function doubleIt(num: number): number{
            if(num <= 0){
                throw new ExceptionNumber("The value given should be greater than 0")
            }
            return num * 2;
            

        }

    it("should call static property", ()=>{
        console.log(Configuration.DBNAME, Configuration.DBUSER, Configuration.DBPASSWD, Configuration.DBPORT);
        console.log(Configuration.CONNECTIONTIMEOUT(1,2,3,4,5,6));
        try{
            console.log(doubleIt(0));
        }catch(e){
            console.log(e.message);
        }
        
    })
})