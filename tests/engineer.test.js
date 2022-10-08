const Engineer = require('../lib/engineer');


describe("Engineer", () => {
    describe("Initialization", () => {
        it("should initiate an object", () => {
            const obj = new Engineer();
            expect(typeof (obj)).toEqual("object");
        });
    });

    describe("Github", () => {
        it("should create new github", () => {
            const obj = new Engineer("Diana", 3, "diana.portillo01@gmail.com", "dianaportillo");
            expect(obj.github).toEqual("dianaportillo");
        });
    });

    describe("getGithub", () => {
        it("can return gitHub username by getGithub method", () => {
            const obj = new Engineer("Diana", 3, "diana.portillo01@gmail.com", "dianaportillo");
            expect(obj.getGithub()).toEqual("dianaportillo");
        });
    });

    describe("getRole", () => {
        it("can return role by getRole method", () => {
            const role = "Engineer";
            const obj = new Engineer("Diana", 3, "diana.portillo01@gmail.com", "dianaportillo");
            expect(obj.getRole()).toEqual(role);
        });
    });
});