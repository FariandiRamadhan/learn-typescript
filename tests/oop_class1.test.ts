import {VP, President} from "../srcs/oop_class1";
describe('Learn OOP with typescript', ()=>{
    const vp:VP = new VP(123, "Foo");
    const president:President = new President();
    vp.address = "New Jersey";

    // Set _rule by setting rule
    president.rule = "don't be late!";

    it("should show some results from class", ()=>{
        console.log(vp.address);
        console.log(vp.identity("good morning"));
        console.log(president.rule);
    })

});