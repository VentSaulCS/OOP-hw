const Intern = require("../library/Intern");

describe('Test Intern class', () => {
   it('Intern is an object',() =>{
       const myIntern = new Intern("Saul",121,"test@gmail.com")
       expect(typeof(myIntern)).toBe("object");
   });
   it('Intern\'s name attribute',() =>{
    const myIntern = new Intern("Saul",121,"test@gmail.com")
    expect(myIntern.name).toBe("Saul");
   });
   it('Intern\'s Id attribute',() =>{
    const myIntern = new Intern("Saul",121,"test@gmail.com")
    expect(myIntern.id).toBe(121);
   });
   it('Intern\'s email attribute',() =>{
    const myIntern = new Intern("Saul",121,"test@gmail.com")
    expect(myIntern.email).toBe("test@gmail.com");
   });
   it('Intern\'s gerName Method',() =>{
    const myIntern = new Intern("Saul",121,"test@gmail.com")
    expect(myIntern.getName()).toBe("Saul");
   });
   it('Intern\'s getId Method',() =>{
    const myIntern = new Intern("Saul",121,"test@gmail.com")
    expect(myIntern.getId()).toBe(121);
   });
   it('Intern\'s getemail Method',() =>{
    const myIntern = new Intern("Saul",121,"test@gmail.com")
    expect(myIntern.getEmail()).toBe("test@gmail.com");
   });
   it('Intern\'sgetRole Method',() =>{
    const myIntern = new Intern("Saul",121,"test@gmail.com")
    expect(myIntern.getRole()).toBe("Intern");
   });
})
