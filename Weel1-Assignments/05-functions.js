// Normal function


function userProfile(name, age){
    // console.log(`Hello ${name}!`)
    console.log("Hello " + name + "!");
    console.log(`Age of the user is ${age}`)
}
userProfile("Loganathan", 63);


//Arrow function

// userProfile("Shankaran");

let double = (value) => {
    let b = value * 2;
    console.log(`Your input is ${value} and double the value is ${b}`);
}

double(20,45);

// Anonymous fucntion

let waits = function(){
setTimeout(function() {
    console.log("This Message is delayed by 3 seconds");
}, 3000);
}

waits();

