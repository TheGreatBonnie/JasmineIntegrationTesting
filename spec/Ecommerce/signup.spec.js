const SignupPage = require('../PageModel/signupPage.main');  
const AddToCart = require('../PageModel/addToCart.main');  

//to set jasmine default timeout
jasmine.DEFAULT_TIMEOUT_INTERVAL = 80 * 1000;
jasmine.getEnv().defaultTimeoutInterval = 80000;

// Start to write the first test case
describe("Ecommerce Store Integration Tests", function() {
    
    beforeEach(async () => {
        SignupPage.before();
    });

    afterEach(async () => {
        SignupPage.quitB();
    });
    

    it("User should be able to create an account and add item to cart", async function() {
        await SignupPage.visit();
    
        await SignupPage.setFirstName('Joseph');
        await SignupPage.setLastName('Doe');
        await SignupPage.setEmail('jdoe4473@gmail.com'); //Use a different email to run the test to avoid getting an error
        await SignupPage.setTelephone('0712345678');
        await SignupPage.setPassword('12345');
        await SignupPage.setPasswordConfirm('12345');
        await SignupPage.agreePolicy();
        await SignupPage.submitBtn();
        await SignupPage.successMessage();
        await AddToCart.categoryBtn();
        await AddToCart.phonesCategoryBtn();
        await AddToCart.HTCPhoneBtn();
        await AddToCart.addToCartBtn();
        await AddToCart.cartBtn();
        await AddToCart.itemName();
    });
});