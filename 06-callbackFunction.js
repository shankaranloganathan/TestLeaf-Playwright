function getUserData(callback){
    console.log(`We are fetching User info..`)
    setTimeout(() => {
        let users = {
            name: "Shankaran",
            age: 31
    }
        callback(users);
    }, 3000);
}

function output(users){
    console.log(`Registered user name is ${users.name}`);
    console.log(`Registered user Age  is ${users.age}`);
}

getUserData(output);
