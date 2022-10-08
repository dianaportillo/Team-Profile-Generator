const Employee = require('../lib/employee');

describe("Employee", () => {
  describe("Initialization", () => {
    it("should initiate an object", () => {
      const obj = new Employee();
      expect(typeof (obj)).toEqual("object");
    });
  });

  describe("Name", () => {
    it("should create new name", () => {
      const obj = new Employee("Diana");
      expect(obj.name).toEqual("Diana");
    });
  });
  describe("Id", () => {
    it("should create new id", () => {
      const obj = new Employee("Diana", 10);
      expect(obj.id).toEqual(10);
    });
  });
  describe("Email", () => {
    it("should create new Email", () => {
      const obj = new Employee("Diana", 10, "diana.portillo01@gmail.com");
      expect(obj.email).toEqual("diana.portillo01@gmail.com");
    });
  });
  describe("getName", () => {
    it("can return name by getName method", () => {
      const obj = new Employee("Diana");
      expect(obj.getName()).toEqual("Diana");
    });
  });
  describe("getId", () => {
    it("can return id by getId method", () => {
      const obj = new Employee("Diana", 10);
      expect(obj.getId()).toEqual(10);
    });
  });
  describe("getEmail", () => {
    it("can return email by getEmail method", () => {
      const obj = new Employee("Diana", 10, "diana.portillo01@gmail.com");
      expect(obj.getEmail()).toEqual("diana.portillo01@gmail.com");
    });
  });
  describe("getRole", () => {
    it("can return role by getRole method", () => {
      const role = "Employee";
      const obj = new Employee("Diana", 10, "diana.portillo01@gmail.com");
      expect(obj.getRole()).toEqual(role);
    });
  });
});