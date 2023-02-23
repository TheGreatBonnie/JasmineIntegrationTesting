selenium = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

const username= process.env.LT_USERNAME || "Your Username"
const accessKey=  process.env.LT_ACCESS_KEY || "Your Access Key"
var remoteHub = 'https://' + username + ':' + accessKey + '@hub.lambdatest.com/wd/hub';

const chromeWindowsCapability = {
    "base": "WebDriver",
	"browserName": "Chrome",
	"browserVersion": "108.0",
	"LT:Options": {
		"username": "Your Username",
		"accessKey": "Your Access Key",
		"platformName": "Windows 10",
		"build": "Jasmine selenium",
		"project": "Integration",
		"w3c": true,
		"plugin": "node_js-jasmine",
		"idleTimeout":"270"
	}
};

const getElementById = async (driver, id, timeout = 8000) => {
    const el = await driver.wait(until.elementLocated(By.id(id)), timeout);
    return await driver.wait(until.elementIsVisible(el), timeout);
};
  
const getElementByXpath = async (driver, xpath, timeout = 10000) => {
    const el = await driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
    return await driver.wait(until.elementIsVisible(el), timeout);
};
  
const seleniumDriver = new selenium.Builder().
usingServer(remoteHub).
withCapabilities(chromeWindowsCapability).
build();

class Main {

    constructor() {
        this.driver = seleniumDriver;
        this.byId = getElementById;
        this.byXpath = getElementByXpath;
    }
}

module.exports = Main;