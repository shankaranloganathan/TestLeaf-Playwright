function factorial(n){
    if(n>=0){ // check if the given nmber is positive if not go to else block
        let result=1;
        for(let i=1;i<=n;i++){ //looping the given number if its positive
            result = result * i; //multiplying the given 
        }
        console.log(`The Factorial of ${n} is ${result}`);
    }else{
        console.log(`ERROR: The given value: ${n} is negative`);
        
    }
}

factorial(5);