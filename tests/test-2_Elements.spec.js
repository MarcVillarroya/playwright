const { test, expect } = require('@playwright/test');
const ElementTabs = require('../pages/elements/elementTabs');
const HomePage = require('../pages/homePage');
const TextBox = require('../pages/elements/textbox');
const data = require('../data/data.json');
const CheckBox = require('../pages/elements/checkBox');
const RadioButton = require('../pages/elements/radioButton');

test.describe('Test the Elements Tab', () =>{
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

    test('TC-8.Should go to elements tab, select the documents checkbox', async ({page}) => {
        const homePage = new HomePage(page);
        const elementsTabs = new ElementTabs(page);
        const checkbox = new CheckBox(page);

        await homePage.navigate();
        await homePage.clickOnElementsTab();
        await expect(page).toHaveURL(/\/elements/);
        await elementsTabs.clickOnCheckboxTab();

        await checkbox.clickOnToggle();
        await checkbox.clickOnDocuments();

        await expect(checkbox.elements.result()).toBeVisible();
        await expect(checkbox.elements.result()).toContainText('documents');
    });

    test('TC-9.Should go to elements tab and radio Button and select Yes', async ({page}) => {
        const homePage = new HomePage(page);
        const elementsTabs = new ElementTabs(page);
        const radioButton = new RadioButton(page);

        await homePage.navigate();
        await homePage.clickOnElementsTab();
        await expect(page).toHaveURL(/\/elements/);
        await elementsTabs.clickOnRadioButtonTab();

        await radioButton.clickOnYes();
        
        await expect(radioButton.elements.result()).toBeVisible();
        await expect(radioButton.elements.result()).toContainText('Yes');
    });

    test('TC-10.Should go to elements tab and radio Button and select Impressive', async ({page}) => {
        const homePage = new HomePage(page);
        const elementsTabs = new ElementTabs(page);
        const radioButton = new RadioButton(page);

        await homePage.navigate();
        await homePage.clickOnElementsTab();
        await expect(page).toHaveURL(/\/elements/);
        await elementsTabs.clickOnRadioButtonTab();

        await radioButton.clickOnImpressive();
        
        await expect(radioButton.elements.result()).toBeVisible();
        await expect(radioButton.elements.result()).toContainText('Impressive');
    });
});