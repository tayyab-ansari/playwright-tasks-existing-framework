const { expect } = require("@playwright/test");
const { helper } = require("../utils/helper");
class HomePage {

    constructor(page) {
        this.page = page;
        this.loginLink = page.getByText('Login or register');
        this.welcomeMsg = page.getByText('Welcome back Tayyab');
        this.currencyDropdown = page.locator('ul.language.pull-left');
        this.checkout = page.locator('ul#main_menu_top a.top.menu_checkout');
        this.continue = page.locator('button[title="Continue"]')

        this.firstName = '#AccountFrm_firstname'
        this.lastName = '#AccountFrm_lastname'
        this.email = '#AccountFrm_email'
        this.address1 = '#AccountFrm_address_1'
        this.city = '#AccountFrm_city'
        this.region = '#AccountFrm_zone_id'
        this.zipCode = '#AccountFrm_postcode'
        this.country = '#AccountFrm_country_id'
        this.username = '#AccountFrm_loginname'
        this.password = '#AccountFrm_password'
        this.confirmPassword = '#AccountFrm_confirm'
        this.privacyPolicy = '#AccountFrm_agree'
    }

    helperObj = new helper();

    async goTo(url) {
        await this.page.goto(url);
    }

    async validateHomePage(title) {
        await expect(this.page).toHaveTitle(title)
    }

    async navigateToLoginPage() {
        await this.loginLink.click();
    }

    async verifyUserisLoggedIn() {
        await expect(this.welcomeMsg).toBeVisible();
    }

    async selectCurrency(currency) {
        await this.currencyDropdown.hover();
        await this.page.locator("[href*='"+currency+"']").click();
    }

    async selectMainMenu(menu, subMenu){
        await this.page.locator(`(//section[@id='categorymenu']//a[contains(text(),'${menu}')])[2]`).hover();
        await this.page.locator(`(//section[@id='categorymenu']//a[contains(text(),'${menu}')])[2]/following-sibling::div//a[contains(text(),'${subMenu}')]`).click();
    }

    async selectMenu(menu){
        await this.page.locator(`(//section[@id='categorymenu']//a[contains(text(),'${menu}')])[1]`).click();
    }

    async clickCheckout(){
        await this.checkout.click();
    }

    async register(){
        await this.continue.click();
        await this.fillNewUserForm();

    }

    async fillNewUserForm(){
        const newUsername = await this.generateRandomUsername()
        const password = 'TA123!'
        const newEmail = await this.generateRandomEmail()
        await this.page.fill(this.firstName, 'Tayyab')
        await this.page.fill(this.lastName, 'Ansari')
        await this.page.fill(this.email, newEmail)
        await this.page.fill(this.address1, 'Lahore')
        await this.page.fill(this.city, 'Lahore')
        await this.page.locator(this.region).selectOption('3516')
        await this.page.fill(this.zipCode, '54000')
        await this.page.locator(this.country).selectOption('162')

        await this.page.fill(this.username, newUsername)
        await this.page.fill(this.password, password)
        await this.page.fill(this.confirmPassword, password)
        await this.page.locator(this.privacyPolicy).check()
        await this.continue.click();
        await this.helperObj.writeDataToJSONFile("username", newUsername, "./utils/credentials.json")
    }

    async generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(7);
        const email = `user_${randomString}@example.com`;
        return email;
    }

    async generateRandomUsername() {
        const randomString = Math.random().toString(36).substring(7);
        const username = `tayyab_${randomString}`;
        return username;
    }
    
}

module.exports = { HomePage }