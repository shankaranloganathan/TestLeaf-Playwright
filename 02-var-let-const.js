const browserVersion = "Chrome"

function getBrowserVersion (){
    var browser = browserVersion
    if ( browser == "Chrome"){
        let browserVersion = "inside scope browser" 
        console.log("The Browserversion inside scope is: ", browserVersion)
    }else{
        let browserVersion = "else Block"
        console.log("The Browserversion in else block is : ", browserVersion)
    }
}

getBrowserVersion()
console.log("The Browserversion outside the fuction: ", browserVersion)
