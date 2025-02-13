
let conditionalPromise = new Promise((resolve,reject)=>{ 
    let num = Math.random(); //initializing a variabled named num which uses Math function to generate random numbers
    if(num > .5){
        resolve("Resolved Successfully!")  //success message for Promise function
    }else{
        reject("Rejected!!") //Error message for promise fucntion
    }

});

conditionalPromise.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});