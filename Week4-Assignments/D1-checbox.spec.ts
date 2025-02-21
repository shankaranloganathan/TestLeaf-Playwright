import {test, expect} from "@playwright/test";
import { log } from "util";

test ("Verifying check box", async({page})=>{
    
    await page.goto("https://leafground.com/checkbox.xhtml");

    async function selectCard(CardTitle:string) {
       const Card = await page.locator(".card").filter({hasText: CardTitle}) 
       return Card;
    }

    async function popup(mesage:string) {
        const popupMessage = await page.locator("//div[@role='alert']").innerText()
        await expect(popupMessage).toContain(mesage)
    }

    await (await selectCard("Basic Checkbo")).locator(".ui-widget>div").nth(1).click();
    await (await selectCard("Notification")).locator(".ui-widget>div").nth(1).click();
    await popup("Checked");
    const popupMessage = await page.locator("//div[@role='alert']").innerText()
    await expect(popupMessage).toContain("Checked")


    
    let a=[1,3,4]
    for(let i=0;i<a.length;i++){
        await (await selectCard("Choose your favorite language(s)")).locator(".ui-widget.ui-state-default").nth(a[i]).click();
    }

    await page.waitForTimeout(10000);
    await (await selectCard("Tri State Checkbox")).locator(".ui-widget>div").nth(1).click();
    await popup("State = 1")

    await page.waitForTimeout(10000);
    await (await selectCard("Tri State Checkbox")).locator(".ui-widget>div").nth(1).click();
    await popup("State = 2")

    await page.waitForTimeout(10000);
    await (await selectCard("Tri State Checkbox")).locator(".ui-widget>div").nth(1).click();
    await popup("State = 0")

    await page.waitForTimeout(10000);
    await (await selectCard("Toggle Switch")).locator(".ui-widget>div").nth(1).click();
    await popup("Checked");

    await (await selectCard("Verify if check box is disabled")).locator(".ui-widget>div").nth(1).isDisabled();

    await (await selectCard("Select Multiple")).locator(".ui-corner-right").click();
    await page.locator("//li[@data-item-value='London']").locator(".ui-state-default").click();
    await page.locator("//li[@data-item-value='Rome']").locator(".ui-state-default").click();
    page.close();

});