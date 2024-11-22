import { sayHello } from "../srcs/sayhalo";

describe('sayHello', function (): void {
    it("should return hello fari", function(){
        expect(sayHello("Fari")).toBe("Hello Fari!");
    });
});