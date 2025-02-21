import {test, expect} from "@playwright/test";

test ("Button cases", async({page,context})=>{

    await page.goto("https://login.salesforce.com");
    await page.getByLabel('Username').fill("shankaran@testleaf.com");
    await page.getByLabel('Password').fill("1Testteam!");
    await page.locator("//input[@id='Login']").click();
    await page.waitForTimeout(2000);

    //creating a promise to access the new opened tab
    const [newTab] = await Promise.all([context.waitForEvent('page'),page.locator("//span[text()='Learn More']").click()]) 
    await page.waitForTimeout(2000)
    await newTab.locator("(//button[text()='Accept All Cookies'])[1]").click();
    await page.waitForTimeout(2000)
    expect (newTab).toHaveTitle("Service Cloud: AI-powered Customer Service Agent Console | Salesforce US");
    expect (newTab).toHaveURL("https://www.salesforce.com/service/cloud/");
});