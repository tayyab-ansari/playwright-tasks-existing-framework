const {expect} = require("@playwright/test");

class DashboardPage{

    constructor(page){
        this.page = page;
        this.cardTitles = page.locator("div.card-body b");
        this.item_addToCart = page.locator("div.card-body i.fa-shopping-cart");
        this.successAlert = page.getByLabel("Product Added to Cart")
        this.home_addToCart = page.locator("button.btn-custom i.fa-shopping-cart");
    }

    async searchProductAddCart(productName){
    await this.page.waitForLoadState('networkidle');
    const count = await this.cardTitles.count();


    for(let i =0;i<count;i++){
        if(await this.cardTitles.nth(i).textContent()==productName){
            await this.item_addToCart.nth(i).click();
            break;
        }
    }
    await expect(this.successAlert).toBeVisible();
    }

    async navigateToCart(){
        await this.home_addToCart.click();
    }

}

module.exports = {DashboardPage}