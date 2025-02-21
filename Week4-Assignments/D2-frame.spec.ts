import {test, expect} from "@playwright/test";
import exp from "constants";
import { TIMEOUT } from "dns";

test ("Verifying check box", async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml")

    //assert clicking a button inside a frame
    const insideFrame = await page.frameLocator("(//iframe)[1]")
    const insideFrameButtton = await insideFrame.locator("#Click")
    await insideFrameButtton.click();
    const t = await insideFrameButtton.innerText()
    await expect(t).toContain("Hurray! You Clicked Me.");

    //Frame Count in the page
    const cardCount = await page.frames()
    const frameCount = cardCount.length
    console.log(`The total number of frames present is: ${frameCount}`);
    
    //assert clicking a button inside a nested frame
    const card = await page.locator(".card").filter({hasText: "Click Me (Inside Nested frame)"})
    const frameer1 = card.frameLocator("iframe");
    const framer2 = frameer1.frameLocator("iframe");
    const framer2Button = await framer2.locator("#Click")
    await framer2Button.click();
    const p = await framer2Button.innerText()
    await expect(p).toContain("Hurray! You Clicked Me.");

});
