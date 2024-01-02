const { LoginPage } = require('./LoginPage');
const { DashboardPage } = require("./DashBoardPage");
const { MycartPage } = require("./MycartPage");
const { CheckoutPage } = require("./CheckoutPage");
const { OrderconfirmationPage } = require("./OrderconfirmationPage");
const { FragranceMenuPage } = require("./FragranceMenuPage");
const { OrdersummaryPage } = require("./OrdersummaryPage");
const { HomePage } = require("./HomePage");

class POManager{

    constructor(page){
        this.page=page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.myCartPage = new MycartPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.orderConfirmationPage = new OrderconfirmationPage(this.page);
        this.fragranceMenuPage = new FragranceMenuPage(this.page);
        this.orderSummaryPage = new OrdersummaryPage(this.page);
        this.homePage = new HomePage(this.page);
    }

getLoginPage(){
    return this.loginPage;
}

getDashBoardPage(){
    return this.dashboardPage;
}

getMyCartPage(){
    return this.myCartPage;
}

getCheckoutPage(){
    return this.checkoutPage;
}

getOrderConfirmationPage(){
    return this.orderConfirmationPage;
}

getFragranceMenuPagePage(){
    return this.fragranceMenuPage;
}

getOrderSummaryPage(){
    return this.orderSummaryPage;
}

getHomePage(){
    return this.homePage;
}

}

module.exports = {POManager}