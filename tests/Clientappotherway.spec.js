const { test, expect } = require('@playwright/test');
 
 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "mathew.nibin89@yahoo.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill("Toronto@2025");
   await page.getByRole("button", {name:'Login'}).click();
     // Wait for products container (THIS IS IMPORTANT)
  await page.waitForSelector(".card-body");

   //Find the required products count and loop through it and click on cart button
 await  page.locator(".card-body").filter({hasText : "ZARA COAT 3"})
  .getByRole("button",{name :'Add To Cart'}).click();

  await page.getByRole("listitem").getByRole('button', {name:"Cart"}).click();

// Verify the cart page is loaded

await page.locator("div li").first().waitFor()

// Assertion to verify the product is added to the cart-Locator identified using text method
await expect(page.getByText("ZARA COAT 3")).toBeVisible();

// Proceed to Checkout

await page.getByRole("button", {name :"Checkout"}).click();

//Personal Information page - Payment Information
//cvv
await page.locator("input[type='text']").nth(1).fill("619");

//Name on the Card

// ✅ CORRECT - Find parent field div, then input
await page.locator('.field')
  .filter({ hasText: 'Name on Card' })
  .locator("input[type='text']")
  .fill('John Doe');

// Checkout page - Type country name and select the country from the dynamic dropdown
// Type slowly -Press sequentially locator the keys with delay
// Shipping information

await page.getByPlaceholder("Select Country").pressSequentially("Ind", { delay: 100 })

await page.getByRole("button", { name : "India"}).nth(1).click();

await page.getByText("PLACE ORDER").click();
//Order Confirmation page - Assert the Thank you message
await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();

//Get the order ID for future reference
const orderid= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderid);

// Navigate Orders page
await page.locator("button[routerlink*='myorders']").click();

//wait for table to load
await page.locator("tbody").waitFor();

//Dynamically find the order in the orders table and click view button

const rows = await page.locator("tbody tr");

for(let i=0; i < await rows.count(); ++i){

   const roworderid = await rows.nth(i).locator("th").textContent();
   if(orderid.includes(roworderid)) {
      //Click the view button
            await rows.nth(i).locator("button").first().click();
            break;
   }
}
const orderdetails = await page.locator(".col-text").textContent();
expect(orderid.includes(orderdetails)).toBeTruthy();

})