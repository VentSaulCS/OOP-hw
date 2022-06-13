const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email,officeNumber){
    super(name,id,email) // it takes eveything from employee class and adding to the manager class
    this.officeNumber = officeNumber
    }
    getOfficeNumber(){ // 
        return this.officeNumber
    }
  
    getRole(){
        return "Manager" //when we say get role it saying get manager
    }
}
module.exports = Manager