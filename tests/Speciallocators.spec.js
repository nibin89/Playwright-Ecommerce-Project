import {test, expect} from '@playwright/test';

test('Playwright Special Locators Demo', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/angularpractice/');

    // Using Getbylabel
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel("Employed").click();
    await page.getByLabel("gender").selectOption("Female");

// getbyplaceholder
await page.getByPlaceholder("Password").fill("Hello@123");

//get by role

await page.getByRole("button",{name:"Submit"}).click();


//getbytext
await page.getByText("Success ! The Form has been submitted successfully!. ").isVisible();
await page.getByRole("link", {name:"Shop"}).click();
await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole("button",{name:"Add"}).click();

})