const user ={first: 'john', last:'David'};
// let fName = user.first;
// let lName = user.last;
// console.log(`${fName} ${lName}`);

//object destructing
let {first:fName , last:lName}=user;
console.log(`${fName}... ${lName}`);

//array destructing
let names = ['Smith', 'Jones'];
let [name0, name1]=names;
console.log(name0);
console.log(name1);
