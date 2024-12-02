import {Person, Belonging, ShowItem, Part} from "../srcs/oop_class2";
describe('Learn OOP with typescript', ()=>{
    const person: Person = new Person("lol", "Bar");
    const belonging: Belonging = new Belonging("lmao", "Baz", true);
    const showitem: ShowItem = new ShowItem(199);
    const part: Part = new Part("Mercedes Benz");

    it("should show some results from extended class", ()=>{
        console.log(person.id, person.name);
        console.log(belonging.passCheck());
        console.log(showitem.showItemName("Health Potion"));
        console.log(part.carName("Hyundai"));
        console.log(part.carLicense(100));
    })

});