const { test, expect } = require('@playwright/test');
const ElementTabs = require('../pages/elements/elementTabs');
const HomePage = require('../pages/homePage');
const TextBox = require('../pages/elements/textbox');
const data = require('../data/data.json')

test.describe('Test the textBoxPage', () =>{
    test('TC-7.Should go to elements tab, fill the textBoxes and submit the results', async ({page}) => {
        const homePage = new HomePage(page);
        const elementsTabs = new ElementTabs(page);
        const textBox = new TextBox(page);

        await homePage.navigate();
        await homePage.clickOnElementsTab();
        await expect(page).toHaveURL(/\/elements/);
        await elementsTabs.clickOnTextBoxTab();

        await textBox.insertUserName(data.fullName);
        await textBox.insertEmail(data.email);
        await textBox.insertCurrentAdress(data.currentAddress);
        await textBox.insertPermanentAdress(data.permanentAddress);
        await textBox.clickOnSubmit();

        await expect(page.getByText(`Name:${data.fullName}`)).toBeVisible();
        await expect(page.getByText(`Email:${data.email}`)).toBeVisible();
        await expect(page.getByText(`Current Address :${data.currentAddress}`)).toBeVisible();
        await expect(page.getByText(`Permananet Address :${data.permanentAddress}`)).toBeVisible();
        
        
    });
});