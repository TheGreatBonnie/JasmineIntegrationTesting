const Main = require('./main')

class AddToCart extends Main {
  
    constructor() {
      super();

      this.categoryButton = ('//a[normalize-space()="Shop by Category"]');
      this.phonesCategoryButton = ('//span[normalize-space()="Phone, Tablets & Ipod"]');
      this.HTCPhoneButton = ('//div[@class="carousel-item active"]//img[@title="HTC Touch HD"]');
      this.addToCartButton = ('//div[@id="entry_216842"]//button[@title="Add to Cart"][normalize-space()="Add to Cart"]');
      this.cartButton = ('//a[@class="btn btn-primary btn-block"]');
      this.itemNameText = ('//td[@class="text-left"]//a[contains(text(),"HTC Touch HD")]');
    }
  
    async categoryBtn() {
      const categoryBtn = await this.byXpath(this.driver, this.categoryButton);
      await categoryBtn.click();
    }

    async phonesCategoryBtn() {
        const phonesCategoryBtn = await this.byXpath(this.driver, this.phonesCategoryButton);
        await phonesCategoryBtn.click();
    }

    async HTCPhoneBtn() {
        const HTCPhoneBtn = await this.byXpath(this.driver, this.HTCPhoneButton);
        await HTCPhoneBtn.click();
    }

    async addToCartBtn() {
        const categoryBtn = await this.byXpath(this.driver, this.addToCartButton);
        await categoryBtn.click();
    }

    async cartBtn() {
        const cartBtn = await this.byXpath(this.driver, this.cartButton);
        await cartBtn.click();
    }

    async itemName() {
        const itemName = await this.byXpath(this.driver, this.itemNameText);
        itemName.getText().then(function(value) {
        expect(value).toBe('HTC Touch HD');
        });
    }
}

module.exports = new AddToCart();