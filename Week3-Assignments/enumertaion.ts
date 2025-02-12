enum Environment{
    LOCAL = "Local",
    DEVELOPMENT = "Development",
    STAGING = "Staging",
    PRODUCTION = "Production"
}

function runTests(Env){
    console.log(`The code is runnig on ${Env} Environment`);   
}

runTests(Environment.STAGING)