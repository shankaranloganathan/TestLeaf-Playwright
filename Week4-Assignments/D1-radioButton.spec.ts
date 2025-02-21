import {test, expect} from "@playwright/test";
import { log } from "util";

test ("Verifying Radio button", async({page})=>{

    //Helper Fucntion to make code optimization
    async function cardfinder(CardTitle: string, value: string ){
        const cardSelector = await page.locator(".card").filter({hasText: CardTitle })
        const getCheckbox = cardSelector.locator(value)
        await getCheckbox.click()
        await expect(getCheckbox).toBeChecked();
    }

    await page.goto("https://leafground.com/radio.xhtml");

    // cardfinder("Find the default select radio button","//input[@checked='checked']");
    const cardSelector = await page.locator(".card").filter({hasText: "Find the default select radio button" })
    const getCheckbox = cardSelector.locator("//input[@checked='checked']")
    await expect(getCheckbox).toBeChecked();

    //Calling the helper fcuntion
    cardfinder('Your most favorite browser',"//label[text()='Chrome']")

    //Calling the helper fcuntion
    cardfinder('UnSelectable',"//label[text()='Chennai']")

    const age = await page.locator(".card").filter({hasText: 'Select the age group (only if not selected)'})
    const ageClick = age.locator("//input[@checked='checked']")
    await expect(ageClick).toBeChecked();
    const defaultAge = await ageClick.inputValue();
    expect (defaultAge).toContain('21-40 Years');
    
});