const Manager = require("../library/Manager");

describe('Test Manager class', () => {
   it('Manager is an object',() =>{
       const myManager = new Manager("Saul",121,"test@gmail.com")
       expect(typeof(myManager)).toBe("object");
   });
   it('Manager\'s name attribute',() =>{
    const myManager = new Manager("Saul",121,"test@gmail.com")
    expect(myManager.name).toBe("Saul");
   });
   it('Manager\'s Id attribute',() =>{
    const myManager = new Manager("Saul",121,"test@gmail.com")
    expect(myManager.id).toBe(121);
   });
   it('Manager\'s email attribute',() =>{
    const myManager = new Manager("Saul",121,"test@gmail.com")
    expect(myManager.email).toBe("test@gmail.com");
   });
   it('Manager\'s gerName Method',() =>{
    const myManager = new Manager("Saul",121,"test@gmail.com")
    expect(myManager.getName()).toBe("Saul");
   });
   it('Manager\'s getId Method',() =>{
    const myManager = new Manager("Saul",121,"test@gmail.com")
    expect(myManager.getId()).toBe(121);
   });
   it('Manager\'s getemail Method',() =>{
    const myManager = new Manager("Saul",121,"test@gmail.com")
    expect(myManager.getEmail()).toBe("test@gmail.com");
   });
   it('Manager\'sgetRole Method',() =>{
    const myManager = new Manager("Saul",121,"test@gmail.com")
    expect(myManager.getRole()).toBe("Manager");
   });
})
