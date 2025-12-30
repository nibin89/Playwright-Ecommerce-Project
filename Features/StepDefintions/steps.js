const { When, Then, Given } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { POManager } = require('../../PageObjects/POManager');


Given('A Login to Ecommerce application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {


    const loginpage = this.poManager.getLoginPage();
    await loginpage.goto();
    await loginpage.ValidLogin(username, password)

});

When('add {string} to Cart', { timeout: 100 * 1000 }, async function (productName) {

    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.searchProductAddCart(productName)
    await this.dashboardPage.navigatetoCart();
    console.log("Login complete");

});

Then('verify {string} is displayed in the Cart', { timeout: 100 * 1000 }, async function (productName) {

    const cartPage = this.poManager.getCartPage()
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();

});

When('Enter valid details and place the Order', async function () {
    const orderReviewPage = this.poManager.getOrderReviewPage()
    await orderReviewPage.searchCountryAndSelect("ind", "India")
    const orderId = await orderReviewPage.SubmitAndGetOrderId();
    console.log(orderId);


});

Then('Verify order is present in orderhistory', async function () {

    await this.dashboardPage.navigateToOrders();
    const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(orderId);
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});

Given('A Login to Ecommerce2 application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    // Login with invalid credentials

    await this.page.locator('#username').fill('rahulshetty');
    await this.page.locator("[type='password']").fill('learning');
    await this.page.locator("#signInBtn").click();

})