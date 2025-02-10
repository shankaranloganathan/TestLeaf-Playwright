import test from "@playwright/test";

test("Login to salesForce Application", async({page}) => {

    await page.goto("https://login.salesforce.com");
    await page.getByLabel('Username').fill("shankaran@testleaf.com");
    await page.getByLabel('Password').fill("1Testteam!");
    await page.locator("//input[@id='Login']").click();
    await page.waitForTimeout(10000);

    const pageTitle = await page.title();
    const pageUrl = await page.url();

    console.log(`The Title of the page is : ${pageTitle}`);
    console.log(`The URL of the page is : ${pageUrl}`);
});