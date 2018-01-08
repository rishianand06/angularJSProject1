//Features of Typescript
// 3) Inheritance - TS

class Employee{
    private eid : number;
    private name: string;
    private status: boolean;

     //? - make paramter optional, Can not make first parameter optional
    constructor(eid?:number, name?:string,status?: boolean){
        this.eid=eid;
        this.status=status;
        this.name=name;
    }

    getEid(): number{
        return this.eid;
    }

    getName(): String{
        return this.name;
    }
   
    getStatus(): boolean{
        return this.status;
    }
}

class Manager extends Employee{
    private static _instance: Manager;
    private teamcount: number;

    constructor(eid?:number, name?:string,status?: boolean,teamcount?:number){
        if(Manager._instance){
            throw new Error("Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.");
        }
        else{
            super(eid, name, status);
            this.teamcount = teamcount;   
        }
        Manager._instance = this;
         
    }
    getTeamcount():number{
        return this.teamcount;
    }
    // public static get Instance()
    // {
    //     // Do you need arguments? Make it a regular method instead.
    //     return this._instance || (this._instance = new this());
    // }
}

let employee:Employee = new Employee(101,'John', true);
console.log(employee.getEid());
console.log(employee.getName());
console.log(employee.getStatus());

let manager:Manager =new Manager(102,'rishi', false);
// let manager:Manager = new Manager(102,'Smith', true,10);
console.log(manager.getEid());
console.log(manager.getName());
console.log(manager.getStatus());
console.log(manager.getTeamcount());

let manager1:Manager =new Manager(105,'anand', true);