class ElementTabs {
    constructor(page) {
        this.page = page;
        this.elements = {
            textBoxTab: () => this.page.locator('li').filter({ hasText: 'Text Box' }),
            checkBoxTab: () => this.page.locator('li').filter({ hasText: 'Check Box' }),
            radioButtonTab: () => this.page.locator('li').filter({hasText: 'Radio Button' }),
        }
    }


    async clickOnTextBoxTab(){
        await this.elements.textBoxTab().click();
    }
}


module.exports = ElementTabs;