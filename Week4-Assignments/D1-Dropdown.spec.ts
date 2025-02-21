import {test, expect} from "@playwright/test";
import { log } from "console";


test ("Verifying check box", async({page})=>{
    
    await page.goto("https://leafground.com/select.xhtml");

    async function selectCard(CardTitle:string) {
        const Card = await page.locator(".card").filter({hasText: CardTitle}) 
        return Card;
     }

    await page.selectOption(".ui-selectonemenu",{value: 'Playwright'});

    const dropdown = await page.locator(".ui-selectonemenu>option");
    const dropdownCount = await dropdown.count();
    console.log(`The Count is ${dropdownCount}`);

    for(let i=0;i<dropdownCount; i++){
        console.log(await dropdown.nth(i).innerText());
    }

    await (await selectCard("Choose your preferred country.")).locator(".ui-corner-right").click();
    await page.locator("//li[@data-label='India']").click();

    await page.waitForTimeout(1000);
    await (await selectCard("Confirm Cities belongs to Country is loaded")).locator(".ui-corner-right").click();
    await page.locator("//li[@data-label='Chennai']").click()
    await expect(page.locator("//li[@data-label='Chennai']")).toContainText("Chennai");
    const city = await page.locator("((//ul[@role='listbox'])[2])/li")
    const cityNames = await page.locator("((//ul[@role='listbox'])[2])/li").count();

    let result = [];
    let expectedCity = ['Select City', 'Bengaluru', 'Chennai', 'Delhi'];
    for(let i=0;i<cityNames; i++){
        result.push(await city.nth(i).innerText());
    }
    console.log(result);
    //checking the Expected dropdown value and actaul drpdown value
    if(JSON.stringify(expectedCity)==JSON.stringify(result)){
        console.log("Passed");            
    }else
    {
        console.log("Failed");
        
    }

});