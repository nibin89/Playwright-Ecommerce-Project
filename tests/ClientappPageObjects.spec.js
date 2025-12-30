const { test, expect } = require('@playwright/test');
const { customtest } = require('../Utils/test-base');
const { POManager } = require('../PageObjects/POManager');
//json -> String -> js Object
const dataset = JSON.parse(JSON.stringify(require("../Utils/PlaceOrderTestData.json")))

// Data-driven tests (runs for each dataset)
for(const data of dataset) {
    test(`Client App login - ${data.productName}`, async ({ page }) => {
        //                 ↑ Changed to backticks
        const poManager = new POManager(page); 
        const products = page.locator(".card-body");
        const loginpage = poManager.getLoginPage();
        await loginpage.goto();
        await loginpage.ValidLogin(data.username, data.password)
        const dashboardPage = poManager.getDashboardPage();
        await dashboardPage.searchProductAddCart(data.productName)
        await dashboardPage.navigatetoCart();
        const cartPage = poManager.getCartPage()
        await cartPage.VerifyProductIsDisplayed(data.productName);
        await cartPage.Checkout();
        const orderReviewPage = poManager.getOrderReviewPage()
        await orderReviewPage.searchCountryAndSelect("ind", "India")
        const orderId = await orderReviewPage.SubmitAndGetOrderId();
        console.log(orderId);
        await dashboardPage.navigateToOrders();
        const ordersHistoryPage = poManager.getOrdersHistoryPage();
        await ordersHistoryPage.searchOrderAndSelect(orderId);
        expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
    });
} // ✅ Close for loop here

// Separate test using fixture
customtest('Client App login - with fixture', async ({ page, testDataForOrder }) => {
    const poManager = new POManager(page); 
    const products = page.locator(".card-body");
    const loginpage = poManager.getLoginPage();
    await loginpage.goto();
    await loginpage.ValidLogin(testDataForOrder.username, testDataForOrder.password)
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(testDataForOrder.productName)
    await dashboardPage.navigatetoCart();
    const cartPage = poManager.getCartPage()
    await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
    await cartPage.Checkout();
});
// ✅ Removed extra closing brace