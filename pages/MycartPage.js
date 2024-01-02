const {expect} = require("@playwright/test");

class MycartPage{

    constructor(page){
        this.page = page;
        this.myCartSection = page.locator("div.cartSection h3");
        this.checkout = page.getByText("Checkout");
    }

    async verifyProductInCart(productName){
        const my_cart_item = await this.myCartSection.textContent();

        await expect(my_cart_item).toContain(productName);
        await this.page.locator("div li").first().waitFor();
        const bool = await this.page.locator("h3:has-text('"+productName+"')").isVisible();
        await expect(bool).toBeTruthy();
    }

    async navigateToCheckoutPage(){
        await this.checkout.click();
    }
}

module.exports = {MycartPage}