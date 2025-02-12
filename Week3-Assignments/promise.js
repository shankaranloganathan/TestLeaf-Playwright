const { log } = require("console");

let fetchDataFromDatabase = new Promise((resolve,reject) => {
    console.log("Fetching Data...");
    const data = true;
    setTimeout(() => {
    if(data){
        resolve("Data fetched successfully!");
    }else{
        reject("Data not found!");
    }
        
    }, 3000);  
});

fetchDataFromDatabase.then(message=>{
    console.log(message);
}).catch(error=>{
    console.log(error);
});