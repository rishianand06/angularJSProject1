//callback functions

let error = true;

//drawback of promise
// user data is not type safe
// in AngularJS, by using RxJs, there is Observable < any >


let promise = new Promise((resolve,reject) =>{

    setTimeout(()=>{
        console.log("Task executed successfully....");
        if(error){
            const user = { first: 'John', last: 'David'};
            reject(user);
        }
        else{
            resolve();
        }
    },1000);
});

promise.then(
    () => console.log("Task completed"),
    (user) => {
        console.log(user.first +" Task terminated " +user.last);
        reject();
    }
).then(
    () => console.log("Task completed1"),
    () => {
        console.log("Task terminated2");
        throw new Error ("Error raised........");
    }).catch((msg) =>{
        console.log(msg);
    }
);
console.log("Application started");


















