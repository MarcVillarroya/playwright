class RadioButton {
    constructor(page) {
        this.page = page;
        this.elements = {
            yesCB : () => this.page.getByText('Yes'),
            impressiveCB : () => this.page.getByText('Impressive'),
            result : () => this.page.locator('.text-success')

        }
    }

    async clickOnYes() {
        await this.elements.yesCB().click();
    }

    async clickOnImpressive() {
        await this.elements.impressiveCB().click();
    }
}

module.exports = RadioButton;