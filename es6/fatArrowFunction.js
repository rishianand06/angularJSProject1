//function declaration
function add(num1, num2){
    return num1+num2;
}

console.log(add(10,20));

//function expression
let sub=function(num1, num2){
    return num1+num2;
}
console.log(sub(20,30));

//Fat Arrow function
let mul = (num1, num2) => (num1*num2);
console.log(mul(10,20));
