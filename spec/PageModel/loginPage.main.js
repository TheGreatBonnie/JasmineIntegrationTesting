const Main = require('./main')

const loginUrl = 'https://ecommerce-playground.lambdatest.io/index.php?route=account/login'

class LoginPage extends Main {
  
    constructor() {
      super();
      this.url = loginUrl;

      this.emailInput = ('input-email');
      this.passwordInput = ('input-password');
      this.loginButton = ('//input[@value="Login"]');
    }

    async visit() {
      await this.driver.get(this.url);
    }

    async setEmail(email) {
      const userEmail = await this.byId(this.driver, this.emailInput);
      await userEmail.clear();
      await userEmail.sendKeys(email);
    }
  
    async setPassword(password) {
      const userPassword = await this.byId(this.driver, this.passwordInput);
      await userPassword.clear();
      await userPassword.sendKeys(password);
    }
  
    async login() {
      const loginBtn = await this.byXpath(this.driver, this.loginButton);
      await loginBtn.click();
    }

    async accountDash() {
        let currentUrl = await this.driver.getCurrentUrl();
        expect(currentUrl).toEqual('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
    }
}

module.exports = new LoginPage();