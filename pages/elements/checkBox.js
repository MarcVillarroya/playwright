class CheckBox {
    constructor(page) {
        this.page = page;
        this.elements = {
            toggle : () => this.page.getByLabel('Toggle'),
            documentCheckBox : () => this.page.locator('label').filter({ hasText: 'Documents' }).getByRole('img').first(),
            result : () => this.page.locator('#result')
    
        }
    }
    
    async clickOnToggle() {
        await this.elements.toggle().click();
    }
    
    async clickOnDocuments() {
        await this.elements.documentCheckBox().click();
    }
    }


module.exports = CheckBox;


