class TextBox {
    constructor(page) {
        this.page = page;
        this.elements = {
            fullNameTB: () => this.page.locator('#userName'),
            emailTB: () => this.page.locator('#userEmail'),
            currentAdressTB: () => this.page.locator('#currentAddress'),
            permanentAdressTB: () => this.page.locator('#permanentAddress'),
            submitButton: () => this.page.getByRole('button', { name: 'Submit' }),
        }
    }

    async insertUserName(fullName){
        await this.elements.fullNameTB().click();
        await this.elements.fullNameTB().fill(fullName);
    }

    async insertEmail(email){
        await this.elements.emailTB().click();
        await this.elements.emailTB().fill(email);
    }

    async insertCurrentAdress(currentAdress){
        await this.elements.currentAdressTB().click();
        await this.elements.currentAdressTB().fill(currentAdress);
    }

    async insertPermanentAdress(permanentAddress){
        await this.elements.permanentAdressTB().click();
        await this.elements.permanentAdressTB().fill(permanentAddress);
    }

    async clickOnSubmit(){
        await this.elements.submitButton().click();
    }

}

module.exports = TextBox;