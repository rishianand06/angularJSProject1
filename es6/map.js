let map = new Map();

map.set("John", 124.24);
map.set("Smith", 224.24);
map.set("John", 424.24);
map.set("Jerry", 524.24);

console.log(map.get("Jerry"));

console.log(map.size);

console.log(".............Key set.........");
let keys = map.keys();
for (let key of keys){
    console.log(key);
}

console.log(".............Values.........");
let values = map.values();
for (let value of values){
    console.log(value);
}

console.log(".............entries.........");
let entries= map.entries();
for(let entry of entries){
    console.log(entry[0] + ".." +entry[1]);
}
map.clear();