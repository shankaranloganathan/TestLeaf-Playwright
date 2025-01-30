// Number check using if loop 

function numberCategorize(number){
    if(number > 0){
        console.log("The given number is positive");
    }else if(number < 0){
        console.log("The given number is Negative");
    }else{
        console.log("The given number is Zero");
    }
}

numberCategorize(23.43);

// Number check using switch for more efficient

function numberCategorizeSwitch(num){
    switch(true){
        case (num > 0):
        console.log("The given number is positive")
        break;
    case (num < 0):
        console.log("The given number is negative")
        break;
    default:
        console.log("The given number is Zero")
        break;    
    }
}

numberCategorizeSwitch(-2);