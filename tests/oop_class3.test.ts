import {Computer, Driver} from "../srcs/oop_class3"
describe("Class in Typescript", ()=>{
    const comp: Computer = new Computer();
    const comp2: Computer = new Computer(true);
    const driver: Driver = new Driver();
    comp.name = "Foo";

    // Protected Property
    // comp.macAddress = "ok";
    // comp.getIpAddress("0.0.0.0/0");

    // Private Property
    // comp.uuid();

    it("should use visible property", ()=>{
        driver.name = "bar";
        // Accessing private method from public method in the same class
        console.log(comp.accessPrivate()); //return ""
        console.log(comp2.accessPrivate()); // return "uuid:x06"
        console.log(driver.getIpAddress("192.0.0.0/0")); // method overriding
    })
})