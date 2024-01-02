const {expect} = require("@playwright/test");
const { helper } = require("../utils/helper");

class OrdersummaryPage{

    constructor(page){
        this.page = page;
        this.addCartBtn = page.locator("div.pricetag.jumbotron a.productcart");
        this.availableItemPrices = page.locator("div.pricetag.jumbotron a.productcart+div div:nth-child(1)")
    }
     helperObj = new helper();

    async addItemsToCart(subMenu){
        await this.addCartBtn.first().waitFor();
        const count = await this.addCartBtn.count();

        const filePath = './utils/data.json'

        for(let i = 0;i<count;i++){
            const elementHandle = await this.addCartBtn.nth(i);
            await elementHandle.evaluate(node => node.removeAttribute('href'));
    
            await this.addCartBtn.nth(i).click();
            let price = await this.availableItemPrices.nth(i).textContent();
            price = price.replace(/[^.0-9]/g, "");

            const key = (subMenu + " item " + i)

            await this.helperObj.writeDataToJSONFile(key,price,filePath)
        }
    }
}

module.exports = {OrdersummaryPage}