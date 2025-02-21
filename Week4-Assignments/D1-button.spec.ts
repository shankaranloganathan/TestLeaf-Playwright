import {test, expect} from "@playwright/test";

test ("Button cases", async({page})=>{
    page.goto("https://leafground.com/button.xhtml");

    //Created a helper fucntion to filter the locators in the page
    async function selectCard(CardTitle:string) {
        const Card = await page.locator(".card").filter({hasText: CardTitle}) 
        return Card;
     }

    await (await selectCard("Click and Confirm title.")).locator("//button[@type='button']").click();
    await page.waitForTimeout(3000)
    let pageTitle = await page.title()
    await expect(pageTitle).toContain('Dashboard');
    await page.goBack();
    let disabledButton = await (await selectCard("Confirm if the button is disabled.")).locator("//button[@type='button']")
    await expect(disabledButton).toBeDisabled();

    await (await selectCard("Click Image Button and Click on any hidden button")).locator("//button[@type='button']").click();
    let hide = await selectCard("How many rounded buttons are there?");
    await hide.locator("(//button[@type='button'])[1]").click();
    await page.goBack();

    let counter = await page.locator(".card").filter({hasText: "How many rounded buttons are there?"})
    let but = counter.locator("//button[@type='button']")
    await page.waitForTimeout(2000)
    let value = await but.count()
    console.log(value);
     


});