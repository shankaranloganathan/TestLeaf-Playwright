function fibonacci(n: number){
    if(n>=0){
        let num1: number = 0;
        let num2: number = 1;
        let num3: number;
        if (n==0){
            console.log(`The Fibonacci of 0 is 0`);
        }
        if (n==1){
            console.log(`The Fibonacci of 1 is 1`);
        }
        for(let i=2;i<=n;i++){
            num3 = num1+num2
            num1 = num2
            num2 = num3
            console.log(`The Fibonacci of ${i} is ${num3}`);
        }
    }else{
        console.log(`ERROR: The given value: ${n} is negative`);
        
    }
}
fibonacci(5);