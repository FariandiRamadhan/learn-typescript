import {Computer, Driver, Transport, Vehicle, Coupon, Customer} from "../srcs/oop_class3"
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

    // Polymorphism
    let transport: Transport = new Transport("car");
    transport = new Vehicle("motorcycle");

    // property v_name is missing in computer but required in Transport
    // transport = new Computer();

    // Abstract
    // const customer: Customer = new Customer(); // Cannot create instance of an abstract class
    const coupon: Coupon = new Coupon(100, "Baz");

    function sayHello(transport: Transport){
        console.info(`Hello ${transport.v_name}`);
    }

    it("should use visible property", ()=>{
        driver.name = "bar";
        // Accessing private method from public method in the same class
        console.log(comp.accessPrivate()); //return ""
        console.log(comp2.accessPrivate()); // return "uuid:x06"
        console.log(driver.getIpAddress("192.0.0.0/0")); // method overriding
        sayHello(transport);
        // sayHello(comp);

        // Calling sayHello function from abstract Customer
        coupon.sayHello("X16");

        // Check if driver is instance of Computer
        expect(driver instanceof Computer).toBe(true);
    })
})