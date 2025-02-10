import { test, expect } from "@playwright/test";
import { faker } from '@faker-js/faker/locale/en';
import exp from "constants";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const companyName = faker.internet.domainName();

test("Create Lead", async({page}) => {

    await page.goto("https://login.salesforce.com/");

    await page.getByLabel("Username").fill("shankaran@testleaf.com");
    await page.getByLabel("Password").fill("1Testteam!");
    await page.locator("//input[@id='Login']").click();

    await page.locator(`.slds-icon-waffle`).click();
    await page.getByText("view All").click();
    await page.locator("//p[text()='Sales']").click();
    await page.locator("(//span[text()='Leads'])[1]").click();
    await page.locator("//button[text()='New']").click();
    await page.getByRole('combobox', { name: 'Salutation' }).click();
    await page.getByText('Mr.').click();
    await page.getByPlaceholder("Last Name").fill("Loganathan");
    await page.getByRole('textbox', { name: '*Company' }).fill("testleaf");
    await page.locator(`//button[@name='SaveEdit']`).click();

    //To capture the Toast Message
    await expect(page.locator(`.toastContainer`)).toBeVisible();
    let toastMessage = await page.locator(`.toastContainer`).innerText();
    expect (toastMessage).toContain("created");
    

});

test("Create Individuals", async({page}) => {

    await page.goto("https://login.salesforce.com/");

    await page.getByLabel("Username").fill("shankaran@testleaf.com");
    await page.getByLabel("Password").fill("1Testteam!");
    await page.locator("//input[@id='Login']").click();

    await page.locator(`.slds-icon-waffle`).click();
    await page.getByText("view All").click();
    await page.locator("//p[text()='Individuals']").click();
    await page.locator("(//span[text()='Individuals'])[1]").click();
    await page.getByRole('button', { name: 'Recently Viewed | Individuals' }).click();
    await page.getByRole('menuitem', { name: 'New Individual' }).click();
    await page.getByLabel("Last Name").fill("Shankaran")
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    
    //To capture the Toast Message
    await expect(page.locator(`.toastContainer`)).toBeVisible();
    let toastMessage = await page.locator(`.toastContainer`).innerText();
    expect (toastMessage).toContain("created");
    

});

test("Edit Individuals", async({page}) => {

    await page.goto("https://login.salesforce.com/");

    await page.getByLabel("Username").fill("shankaran@testleaf.com");
    await page.getByLabel("Password").fill("1Testteam!");
    await page.locator("//input[@id='Login']").click();

    await page.locator(`.slds-icon-waffle`).click();
    await page.getByText("view All").click();
    await page.locator("//p[text()='Individuals']").click();
    await page.locator("(//span[text()='Individuals'])[1]").click();
    await page.getByPlaceholder("Search this list...").fill("shankaran")
    await page.locator(".cellContainer.cellContainer a").nth(1).click();

    await page.getByRole('menuitem', { name: 'Edit' }).click();
    await page.getByRole('group', { name: '* Name' }).getByRole('combobox').click();
    await page.getByRole('option', { name: 'Mr.' }).click();
    await page.getByPlaceholder("First Name").fill("Shankaran");
    await page.getByRole('button', { name: 'Save', exact: true }).click();

    //To capture the Toast Message
    await expect(page.locator(`.toastContainer`)).toBeVisible();
    let toastMessage = await page.locator(`.toastContainer`).innerText();
    expect (toastMessage).toContain("created");
    

});

test ("Edit Lead", async({page}) => {

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

    await page.locator(`//a[contains(text(),'Edit')]`).click();
    await page.locator("#updateLeadForm_companyName").fill(`Updated ${companyName}`);
    await page.locator(".smallSubmit").first().click();

    expect(page.locator("#viewLead_companyName_sp")).toContainText("Updated")


});

