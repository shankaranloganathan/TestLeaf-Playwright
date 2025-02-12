function factorial(n){
    if(n>=0){
        let result=1;
        for(let i=1;i<=n;i++){
            result *= i;
        }
    console.log(`The Factorial of ${n} is ${result}`);
    }else{
        console.log(`ERROR: The given value: ${n} is negative`);
        
    }

}
factorial(5);