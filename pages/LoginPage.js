const {expect} = require("@playwright/test");

class LoginPage{
    
constructor(page){
    this.page = page;
    this.username = page.locator("#loginFrm_loginname");
    this.password = page.locator("#loginFrm_password");
    this.loginBtn = page.locator("[title='Login']");
}

async login(email,password){
    await this.username.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
    }
}
module.exports = {LoginPage}