const Engineer = require("../library/Engineer");

describe('Test Engineer class', () => {
    it('Enginner is an object',() =>{
        const myEngineer = new Engineer("Saul",121,"test@gmail.com")
        expect(typeof(myEngineer)).tobe("object");
    });
    it('Engineer\'s name attribute',() =>{
        const myEngineer = new Engineer("Saul",121,"test@gmail.com")
        expect(myEngineer.name).tobe("Saul");
    });
    it('Engineer\'s Id attribute',() =>{
        const myEngineer = new Engineer("Saul",121,"test@gmail.com")
        expect(myEngineer.id).toBe(121);
       });
       it('Engineer\'s email attribute',() =>{
        const myEngineer = new Engineer("Saul",121,"test@gmail.com")
        expect(myEngineer.email).toBe("test@gmail.com");
       });
       it('Engineer\'s gerName Method',() =>{
        const myEngineer = new Engineer("Saul",121,"test@gmail.com")
        expect(myEngineer.getName()).toBe("Saul");
       });
       it('Engineer\'s getId Method',() =>{
        const myEngineer = new Engineer("Saul",121,"test@gmail.com")
        expect(myEngineer.getId()).toBe(121);
       });
       it('Engineer\'s getemail Method',() =>{
        const myEngineer = new Engineer("Saul",121,"test@gmail.com")
        expect(myEngineer.getEmail()).toBe("test@gmail.com");
       });
       it('Engineer\'sgetRole Method',() =>{
        const myEngineer = new Engineer("Saul",121,"test@gmail.com")
        expect(myEngineer.getRole()).toBe("Engineer");
       });


})