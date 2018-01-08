
//Features of Typescript
// 2) Class & Objects - TS, ES6.0

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

let employee:Employee = new Employee(101,'John', true);
console.log(employee.getEid());
console.log(employee.getName());
console.log(employee.getStatus());