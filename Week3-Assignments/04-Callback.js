let browser = "chrome";

function checkBrowserVersion(a){
    setTimeout(() => {
        callback(browser)
    }, 2000);
    a(); // callback function

}

function callback(a){
    console.log(`Browser version using callback: ${a}`);
}

checkBrowserVersion(callback);

