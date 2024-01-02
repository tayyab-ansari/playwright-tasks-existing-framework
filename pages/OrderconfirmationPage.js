const {expect} = require("@playwright/test");

class OrderconfirmationPage{

    constructor(page){
        this.order_confirmation = page.locator("h1.hero-primary");
        this.order_id = page.locator("label.ng-star-inserted");
        this.order_history_page_link = page.locator("label[routerlink='/dashboard/myorders']");
    }

async getOrderId(confirmationMsg){
    await expect(this.order_confirmation).toContainText(confirmationMsg)
    const orderId = await this.order_id.textContent();
    const arrayText = orderId.split("|");
    const splittedId = arrayText[1].split(" ");
    const aa = splittedId[1].split(" ");
    const id = aa[0];
    return id;
}

async navigateToOrderHistoryPage(){
    await this.order_history_page_link.click();
}

}

module.exports = {OrderconfirmationPage}