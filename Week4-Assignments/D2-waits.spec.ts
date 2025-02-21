import {test, expect} from "@playwright/test";
import { TIMEOUT } from "dns";

test ("Verifying check box", async({page})=>{
    page.goto("https://leafground.com/waits.xhtml")

    //Helper fucntion for code optimisation
    async function selectCard(CardTitle:string) {
        const Card = await page.locator(".card").filter({hasText: CardTitle}) 
        return Card;
     }

    let Card =  await selectCard("Wait for Visibility (1 - 10 Sec)"); //calling Helper fucntion to fiter
    await Card.locator("//span[text()='Click']").click();
    await expect(Card.locator("//span[text()='I am here']")).toBeVisible({timeout:13000});

    let invisibiltyCard = await selectCard("Wait for Invisibility (1 - 10 Sec)"); 
    await invisibiltyCard.locator("//span[text()='Click']").click();
    await expect(invisibiltyCard.locator("//span[text()='I am about to hide']")).toBeHidden({timeout:13000});

    let waitCard = await selectCard("Wait for Clickability"); 
    await waitCard.locator("//span[text()='Click First Button']").click();
    await waitCard.locator("//span[text()='Click Second']").click();

    let textChangeCard = await selectCard("Wait for Text Change (1 - 10 Sec)"); 
    await textChangeCard.locator("//span[text()='Click']").click();
    await expect(textChangeCard.locator("//span[text()='Did you notice?']")).toBeVisible({timeout:12000})
     



});