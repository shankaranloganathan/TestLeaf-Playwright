import test, { chromium, firefox, webkit } from "@playwright/test";


test("Login to Flipkart app in firefox", async({}) => {

    // //Browser instance
    const browser= await firefox.launch();

    // //create a browser context1
    const context1=await browser.newContext();

    const page1 = await context1.newPage();


    let website = "https://www.flipkart.com/"
    await page1.goto(website);

    //Calling the helper fucntion to get the title and url
    getPageDetails(page1);
    
});

test("Login to redbus app in Safari", async() => {


    //Browser instance
    const browser2= await webkit.launch();

    //create a browser context1
    const context2=await browser2.newContext();

    const page2 = await context2.newPage();


    let website = "https://www.redbus.in/"
    await page2.goto(website);

    //Calling the helper fucntion to get the title and url
    getPageDetails(page2);

});

// Helper Fucntion - to get page title and Url
async function getPageDetails(page){
    const pageUrl =  await page.url();
    const pageTitle = await page.title();

    console.log(`The Title of the page is : ${pageTitle}`);
    console.log(`The URL of the page is : ${pageUrl}`);
}

