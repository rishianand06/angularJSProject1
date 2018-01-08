
//Features of Typescript
// 2) generic

class Box <T>{
    private data: T;
    public addData(data: T):void{
        this.data=data;
    }

    public getData(): T{
        return this.data;
    }

}

let box1: Box<number> = new Box();
box1.addData(100);
console.log(box1.getData());

let box2: Box<string> = new Box();
box2.addData("RISHI");
console.log(box2.getData());

let surnames: Array<string> = new Array();
surnames.push("ANAND");
surnames.push("KAPOOR");
surnames.forEach((surname) =>{
    console.log(surname);
});