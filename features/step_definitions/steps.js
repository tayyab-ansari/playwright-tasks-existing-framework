const { When, Then, Given } = require('@cucumber/cucumber');
const {username, password} = require("../../utils/credentials.json")
const {base_url, pageTitle} = require("../../utils/env.json")


Given('user visit the base url', async function () {
    this.homePage = this.poManager.getHomePage();
    await this.homePage.goTo(base_url);
});

Then('user verify the page title', async function () {
    this.homePage = this.poManager.getHomePage();
    await this.homePage.validateHomePage(pageTitle);
});

When('user click login', async function () {
    await this.homePage.navigateToLoginPage();
});

When('user register himself', async function () {
    await this.homePage.register();
});

When('user log in with valid credentials', async function () {
    const loginPage = this.poManager.getLoginPage();
    await loginPage.login(username, password);
});

Then('user is logged in', async function () {
    await this.homePage.verifyUserisLoggedIn();
});

When('user select currency as {string}', async function (currency) {
    await this.homePage.selectCurrency(currency);
});

When('user select main menu as {string} and sub-menu as {string}', async function (menu, subMenu) {
    await this.homePage.selectMainMenu(menu, subMenu)
});

When('user add items of {string} in cart', async function (subMenu) {
    const orderSummaryPage = this.poManager.getOrderSummaryPage();
    await orderSummaryPage.addItemsToCart(subMenu);
});

When('user click on checkout button', async function () {
    await this.homePage.clickCheckout();
});

Then('user verify items count in cart {string}', async function (time) {
    this.checkoutPage = this.poManager.getCheckoutPage();
    await this.checkoutPage.verifyQuantityOfAddedItemsInCart(time);
});

Then('user verify total price {string}', async function (time) {
    await this.checkoutPage.verifyPriceOfAddedItemsInCart(time);
});

When('user click on edit cart button', async function () {
    await this.checkoutPage.navigateToEditCart();
});

Then('user verify total amount is {float}', async function (check_amount) {
    const data = JSON.parse(JSON.stringify(require("../../utils/data1.json")));
    await this.checkoutPage.checkPrice(check_amount, data.totalItemsInCart);
});

When('user select main menu as {string}', async function (menu) {
    await this.homePage.selectMenu(menu)
});

Then('user verify product count is {float}', async function (length) {
    const fragranceMenuPage = this.poManager.getFragranceMenuPagePage();
    await fragranceMenuPage.verifyProductCount(length);
});
