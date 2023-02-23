const SignupPage = require('../PageModel/signupPage.main');  
const LoginPage = require('../PageModel/loginPage.main');  
const AddToCart = require('../PageModel/addToCart.main');  

//to set jasmine default timeout
jasmine.DEFAULT_TIMEOUT_INTERVAL = 80 * 1000;
jasmine.getEnv().defaultTimeoutInterval = 800000;

// Start to write the first test case
describe("Ecommerce Store Integration Tests", function() {
    beforeEach(async () => {
        SignupPage.before();
    });

    afterEach(async () => {
        SignupPage.quitB();
    });

    it("User should be able to login and add item to cart", async function() {
        await LoginPage.visit();

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
    });
});