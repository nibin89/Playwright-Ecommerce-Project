const { test, expect } = require('@playwright/test')

test("Security test request Intercept", async ({ page }) => {

    const email = "mathew.nibin89@yahoo.com";
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Toronto@2025");
    await page.locator("[value='Login']").click();
    // Wait for products container (THIS IS IMPORTANT)
    await page.waitForSelector(".card-body");


    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6930d8a932ed8658711ddbdehttps://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6930d8a932ed8658711ddbdehttps://rahulshettyacademy.com/api/ecom/order/get-orders-details?id= 6939026c32ed865871298de2' })
    )
    await page.locator("button:has-text('View')").first().click();
                     
    await page.pause(); //unauthorized 403


})