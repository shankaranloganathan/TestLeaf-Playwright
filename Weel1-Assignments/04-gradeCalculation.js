function gradeCalculation(score){
    switch(true){
        case (score >= 90 && score <= 100):
        console.log("your grade is A+")
        break;
    case (score >= 80 && score <90):
        console.log("your grade is A")
        break;
    case (score >= 70 && score <80):
        console.log("your grade is B")
        break;
    case (score >= 60 && score <70):
        console.log("your grade is C")
        break;
    case (score >= 50 && score <60):
        console.log("your grade is B")
        break;  
    case (score < 0 || score > 100):
            console.log("Please enter a valid score! from 0 to 100")
            break;      
    default:
        console.log("You have failed")
        break;    
    }
}

gradeCalculation(101);
