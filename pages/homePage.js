//pages/homePage.js
class HomePage {
    constructor(page){
        this.page = page;
        this.elements = {
            elementsTab: () => this.page.locator('div').filter({ hasText: /^Elements$/ }).first(),
            formsTab: () => this.page.locator('div').filter({ hasText: /^Forms$/ }).first(),
            alertsAndFramesTab: () => this.page.locator('div').filter({ hasText: /^Alerts, Frame & Windows$/ }).first(),
            widgetsTab: () => this.page.locator('div').filter({ hasText: /^Widgets$/ }).first(),
            interactionsTab: () => this.page.locator('div').filter({ hasText: /^Interactions$/ }).first(),
            bookStoreApplicationTab: () => this.page.locator('div').filter({ hasText: /^Book Store Application$/ }).first(),
        }
    }

    async navigate() {
        await this.page.goto('/');
    }

    async clickOnElementsTab() {
        await this.elements.elementsTab().click();
    }

    async clickOnFormsTab() {
        await this.elements.formsTab().click();
    }

    async clickOnAlertsAndFramesTab() {
        await this.elements.alertsAndFramesTab().click();
    }

    async clickOnWidgets() {
        await this.elements.widgetsTab().click();
    }

    async clickOnInteractions() {
        await this.elements.interactionsTab().click();
    }

    async clickOnBookStoreApplication() {
        await this.elements.bookStoreApplicationTab().click();
    }

}

module.exports = HomePage;