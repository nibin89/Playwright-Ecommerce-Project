//Login UI -> .json
//test browser, cart-, order, orderdetails,orderhistory

const { test, expect } = require('@playwright/test');
let webContext;

test.beforeAll( async({browser}) => {

   const context =  await browser.newContext();
   const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill("mathew.nibin89@yahoo.com");
   await page.locator("#userPassword").fill("Toronto@2025");
   await page.locator("[value='Login']").click();
     // Wait for products container (THIS IS IMPORTANT)
  await page.waitForSelector(".card-body");
  await context.storageState({path : 'state.json'})
 webContext=  await browser.newContext({storageState:'state.json'})

})
 
 
test('@Web Client App login', async () => {
   //js file- Login js, DashboardPage
   const email = "mathew.nibin89@yahoo.com";
   const productName = 'ZARA COAT 3';
   const page = await webContext.newPage();
   await page.goto("https://rahulshettyacademy.com/client");
   const products = page.locator(".card-body");
   // Wait for the login form to be visible before interacting
await page.waitForSelector("#userEmail", { state: 'visible' });
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Toronto@2025");
   await page.locator("[value='Login']").click();
     // Wait for products container (THIS IS IMPORTANT)
  await page.waitForSelector(".card-body");

  // Wait for product titles
  await page.locator(".card-body b").first().waitFor({ state: 'visible' });
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles);

   //Find the required products count and loop through it
   const count = await products.count();
   
   for (let i = 0; i < count; ++i) {

      // Add to cart only the specified product
if(await products.nth(i).locator("b").textContent() === productName){

   //Product add to cart - Locator identified using text method
   await products.nth(i).locator("text= Add To Cart").click();
   break;
}
 
}
// Click on the cart button
await page.locator("[routerlink*='cart']").click();
// Verify the cart page is loaded

await page.locator("div li").first().waitFor()

// Assertion to verify the product is added to the cart-Locator identified using text method
const bool = await page.locator("h3:has-text('Zara Coat 3')").isVisible();

// Add Assertions for the actions performed and implement necessary sync steps.
expect(bool).toBeTruthy();

// Proceed to Checkout

await page.locator("text=Checkout").click();

//Checkout page - Type country name and select the country from the dynamic dropdown
//Type slowly -Press sequentially locator the keys with delay

await page.locator("[placeholder*='Country']").pressSequentially("Ind", { delay: 100 })

//wait for the dropdown options to appear
const dropdown = await page.locator(".ta-results")
await dropdown.waitFor();
//total options
const optionCount = await page.locator(".ta-results button").count();
for (let i = 0; i < optionCount; ++i) {
   const text = await dropdown.locator("button").nth(i).textContent();
   if (text=== " India") {

      //click on the required country
      await page.locator(".ta-results button").nth(i).click();
      break;
   }
}
// Identify the email text on the checkout page and assert
expect(page.locator(".user__name label").first()).toHaveText(email);

// Place the order

await page.locator("text=Place Order").click();
//Order Confirmation page - Assert the Thankyou message
expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

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
expect(orderid.includes(orderid)).toBeTruthy();

})