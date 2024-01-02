const { expect } = require("@playwright/test");
const { helper } = require("../utils/helper");

class FragranceMenuPage {

    constructor(page) {
        this.page = page;
        this.addToCartBtn = page.locator("div.pricetag.jumbotron a.productcart");
        this.availableItemPrices = page.locator("div.pricetag.jumbotron a.productcart+div div:nth-child(1)");
    }
    helperObj = new helper();

    async verifyProductCount(length) {
        const data = await JSON.parse(JSON.stringify(require("../utils/data1.json")));
        let totalItems = data.items


        const finalItems = length - totalItems;


        const filePath = './utils/data2.json.json'
        for (let i = 0; i < finalItems; i++) {
            const elementHandle = await this.addToCartBtn.nth(i);
            await elementHandle.evaluate(node => node.removeAttribute('href'));

            await this.addToCartBtn.nth(i).click();
            let price = await this.availableItemPrices.nth(i).textContent();
            price = price.replace(/[^.0-9]/g, "");

            const key = ("item " + i)

            await this.helperObj.writeDataToJSONFile(key, price, filePath)
            totalItems = totalItems + 1
        }
        expect(length).toEqual(totalItems)
        await this.helperObj.writeDataToJSONFile("total", totalItems, "./utils/data1.json")

    }
}

module.exports = { FragranceMenuPage }