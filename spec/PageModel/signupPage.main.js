const Main = require('./main')

const signupUrl = 'https://ecommerce-playground.lambdatest.io/index.php?route=account/register'

class SignupPage extends Main {
  
    constructor() {
      super();
      this.url = signupUrl;

      this.firstNameInput = ('input-firstname');
      this.lastNameInput = ('input-lastname');
      this.emailInput = ('input-email');
      this.telephoneInput = ('input-telephone');
      this.passwordInput = ('input-password');
      this.confirmPasswordInput = ('input-confirm');
      this.agreePolicyBtn = ('//label[@for="input-agree"]');
      this.submitButton = ('//input[@value="Continue"]');
      this.successMessageText = ('//h1[@class="page-title my-3"]');
    }

    async visit() {
      await this.driver.get(this.url);
    }

    async setFirstName(firstname) {
        const userFirstName = await this.byId(this.driver, this.firstNameInput);
        await userFirstName.clear();
        await userFirstName.sendKeys(firstname);
    }

    async setLastName(lastname) {
        const userLastName = await this.byId(this.driver, this.lastNameInput);
        await userLastName.clear();
        await userLastName.sendKeys(lastname);
    }

    async setEmail(email) {
      const userEmail = await this.byId(this.driver, this.emailInput);
      await userEmail.clear();
      await userEmail.sendKeys(email);
    }

    async setTelephone(telephone) {
        const userTelephone = await this.byId(this.driver, this.telephoneInput);
        await userTelephone.clear();
        await userTelephone.sendKeys(telephone);
    }
  
    async setPassword(password) {
      const userPassword = await this.byId(this.driver, this.passwordInput);
      await userPassword.clear();
      await userPassword.sendKeys(password);
    }

    async setPasswordConfirm(passwordConfirm) {
        const userPasswordConfirm = await this.byId(this.driver, this.confirmPasswordInput);
        await userPasswordConfirm.clear();
        await userPasswordConfirm.sendKeys(passwordConfirm);
    }

    async agreePolicy() {
        const agreePlolicyBtn = await this.byXpath(this.driver, this.agreePolicyBtn);
        await agreePlolicyBtn.click();
    }
  
    async submitBtn() {
      const submitBtn = await this.byXpath(this.driver, this.submitButton);
      await submitBtn.click();
    }

    async successMessage() {
        const successMessage = await this.byXpath(this.driver, this.successMessageText);
        successMessage.getText().then(function(value) {
        expect(value).toBe('Your Account Has Been Created!');
        });
    }

    async before() {
        this.driver;
    }

    async quitB() {
        await this.driver.quit();
    }

}

module.exports = new SignupPage();


await LoginPage.setEmail('jdoe@example.com');
await LoginPage.setPassword('12345');
await LoginPage.login();
await LoginPage.accountDash();
await AddToCart.categoryBtn();
await AddToCart.phonesCategoryBtn();
await AddToCart.HTCPhoneBtn();
await AddToCart.addToCartBtn();
await AddToCart.cartBtn();
await AddToCart.itemName();