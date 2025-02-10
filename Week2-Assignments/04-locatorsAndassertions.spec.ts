import {test, expect} from "@playwright/test";
import { faker } from '@faker-js/faker/locale/en';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const companyName = faker.internet.domainName();

test ("Create a Lead", async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    // Login using the CSS Selector
    await page.locator("#username").fill("demosalesmanager");
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click();

    await page.locator("text=CRM/SFA").click();
    
    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Create Lead']").click();

    await page.locator("#createLeadForm_companyName").fill(companyName);
    await page.locator("#createLeadForm_firstName").fill(firstName);
    await page.locator("#createLeadForm_lastName").fill(lastName);
    await page.locator("#createLeadForm_personalTitle").fill("Mr");
    await page.locator("#createLeadForm_annualRevenue").fill("100000");
    await page.locator("#createLeadForm_departmentName").fill("Revenue");
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("+918067876556");

    await page.locator(".smallSubmit").click();

    // Auto Retrying Assertions 
    await expect(page.locator("#viewLead_companyName_sp")).toContainText(companyName);
    await expect(page.locator("#viewLead_lastName_sp")).toHaveText(lastName);

    // Non Retrying Assertions
    expect(page.locator("#viewLead_firstName_sp")).toHaveText(firstName);
    expect(page.locator("#viewLead_statusId_sp")).toHaveText('Assigned');

});

test ("Edit a Lead", async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    // Login using the CSS Selector
    await page.locator("#username").fill("demosalesmanager");
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click();

    await page.locator("text=CRM/SFA").click();
    
    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Find Leads']").click();

    await page.waitForTimeout(5000);
    await page.locator("(//label[contains(text(),'First')])[3]/following-sibling::div/input").fill(firstName);
    await page.locator("//button[text()='Find Leads']").click();

    // await page.waitForSelector(`(//td[@class='x-grid3-col x-grid3-cell x-grid3-td-partyId x-grid3-cell-first '])[1]`);
    await page.locator(`.x-grid3-td-partyId.x-grid3-cell-first a`).first().click();
    await page.locator(`//a[contains(text(),'Edit')]`).click();


    await page.locator("#updateLeadForm_companyName").fill(`${companyName} Update`);
    await page.locator("#updateLeadForm_annualRevenue").fill("200000");
    await page.locator("#updateLeadForm_departmentName").fill("Revenue Department");
    await page.locator("#updateLeadForm_description").fill("Entering a sample Description");

    await page.locator(`.smallSubmit`).first().click();

    // Auto Retrying Assertions 
    await expect(page.locator("#viewLead_companyName_sp")).toContainText(`${companyName} Update`);
    await expect(page.locator("#viewLead_annualRevenue_sp")).toHaveText(`$200,000.00`);

    // Non Retrying Assertions
    expect(page.locator("#viewLead_description_sp")).toHaveText(`Entering a sample Description`);
    expect(page.locator("#viewLead_departmentName_sp")).toHaveText(`Revenue Department`);

});

test ("Create a New Account", async({page}) => {

    await page.goto("https://login.salesforce.com/");

    await page.getByLabel("Username").fill("shankaran@testleaf.com");
    await page.getByLabel("Password").fill("1Testteam!");
    await page.locator("//input[@id='Login']").click();

    await page.waitForTimeout(7000);
    await expect(page).toHaveTitle(`Home | Salesforce`);
    await expect(page).toHaveURL(`https://testleaf34-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home`);

    await page.locator(`.slds-icon-waffle`).click();
    await page.getByText("view All").click();

    await page.getByPlaceholder("Search apps or items...").fill("Service");
    await page.waitForTimeout(2000);
    await page.locator(`(//p[@class='slds-truncate']//mark)[1]`).click();

    await page.getByRole('link', { name: 'Accounts' }).click();
    await page.getByRole('button',{name: 'New'}).click();
    await page.locator(`div>input[name=Name]`).fill(companyName);
    await page.locator(`//button[@name='SaveEdit']`).click();

    const locator = page.locator(`.forceActionsText>a`)
    await expect(page.locator(`.toastContainer`)).toBeVisible();
    let toastMessage = await page.locator(`.toastContainer`).innerText();
    expect (toastMessage).toContain("created");

});











