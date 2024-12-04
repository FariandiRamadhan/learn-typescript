import {MathUtil} from "../srcs/oop_class5";
describe("Namespace in TS", ()=>{
    it("should use namespace",()=>{
        console.log(MathUtil.PI);
        console.log(MathUtil.sum(1,2,3,4,5,6));
    })
})