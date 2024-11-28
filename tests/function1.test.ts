import {identity, paramsFunc} from "../srcs/function1"
describe("create function in typescript", ()=>{
    it("should works (function)(overloading string)", ()=>{
        expect(identity("Foo")).toBe("Hi, my name is Foo");
    })
    it("should works (function)(overloading number)", ()=>{
        expect(identity(13)).toBe(13);
    })
    it("should works (function)(function as parameter)", ()=>{
        function upper(str: string){
            return str.toUpperCase();
        }
        expect(paramsFunc("baz", upper)).toBe("outer func string: BAZ");
    })
})