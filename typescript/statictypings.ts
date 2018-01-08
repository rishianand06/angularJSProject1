// DataTypes - Number, String, Boolean, Any, Array, Tuple, Enum, Void

//Features of Typescript
// 1) Static Typings

// tsc <filename>.ts -watch (for any chnage in ts file, it complied automatically and create js file.)

let msg: String = "Hello World";

function add (num1: Number, num2:Number) : Number{
    return num1.valueOf()+num2.valueOf();
}
console.log(add(10,20));

//console.log(add("Hello ","World"));