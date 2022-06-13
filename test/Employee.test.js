const Employee = require("../library/Employee");

describe('Test Employee class', () => {
   it('Employee is an object',() =>{
       const myEmployee = new Employee("Saul",121,"test@gmail.com")
       expect(typeof(myEmployee)).toBe("object");
   });
   it('Employee\'s name attribute',() =>{
    const myEmployee = new Employee("Saul",121,"test@gmail.com")
    expect(myEmployee.name).toBe("Saul");
   });
   it('Employee\'s Id attribute',() =>{
    const myEmployee = new Employee("Saul",121,"test@gmail.com")
    expect(myEmployee.id).toBe(121);
   });
   it('Employee\'s email attribute',() =>{
    const myEmployee = new Employee("Saul",121,"test@gmail.com")
    expect(myEmployee.email).toBe("test@gmail.com");
   });
   it('Employee\'s gerName Method',() =>{
    const myEmployee = new Employee("Saul",121,"test@gmail.com")
    expect(myEmployee.getName()).toBe("Saul");
   });
   it('Employee\'s getId Method',() =>{
    const myEmployee = new Employee("Saul",121,"test@gmail.com")
    expect(myEmployee.getId()).toBe(121);
   });
   it('Employee\'s getemail Method',() =>{
    const myEmployee = new Employee("Saul",121,"test@gmail.com")
    expect(myEmployee.getEmail()).toBe("test@gmail.com");
   });
   it('Employee\'sgetRole Method',() =>{
    const myEmployee = new Employee("Saul",121,"test@gmail.com")
    expect(myEmployee.getRole()).toBe("Employee");
   });
})
