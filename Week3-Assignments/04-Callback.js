let browser = "chrome";

function checkBrowserVersion(a){
    setTimeout(() => {
        callback(browser)
    }, 2000);

}

function callback(a){
    console.log(`Browser version using callback: ${a}`);
}

checkBrowserVersion(callback);

