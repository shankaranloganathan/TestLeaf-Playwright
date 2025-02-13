enum Environment{ //Storing the values of environment in enumeration
    LOCAL = "Local",
    DEVELOPMENT = "Development",
    STAGING = "Staging",
    PRODUCTION = "Production" 
}

function runTests(Env){
    console.log(`The code is runnig on ${Env} Environment`);   
}

runTests(Environment.STAGING) //enumeration 