let names =new Set();

names.add("John");
names.add("Smith");
names.add("Tom");

console.log(names.has("John"));

names.forEach((name,index) => console.log(name + index));

//for(let name of names)

console.log(names.size);

names.delete("John");
console.log(names.size);

names.clear();