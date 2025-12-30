const {test} = require('@playwright/test');
const { expect } = require('@playwright/test');

test('Browser context playwright test', async ({browser}) => {

//test steps will go here
// chrome - plugins/cookies
const context = await browser.newContext();
const page = await context.newPage();

// Declare locators as variables for reusability
const username = page.locator('#username')
const signin = page.locator('#signInBtn')
const itemTitles = page.locator('.card-body a');


//Navigate to the URL - ecoomerce website
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
console.log(await page.title());
// Login with invalid credentials

await page.locator('#username').fill('rahulshetty');
await page.locator("[type='password']").fill('learning');
await page.locator("#signInBtn").click();

// Extract the text of the error message
console.log(await page.locator("[style*='block']").textContent())
await expect(page.locator("[style*='block']")).toContainText('Incorrect');

//type - fill

await username.clear();
await username.fill('rahulshettyacademy');
await signin.click();

// Grab the text of the first link/item using 'first()' and 'nth()' methods

//console.log(await itemTitles.first().textContent());
//console.log(await itemTitles.nth(1).textContent());

// Grab the total number of items on the page and print them using 'allTextContents()' method

const allItems = await itemTitles.allTextContents();
console.log(allItems);
});
test('Login Test', async ({page}) => {
    
// Declare locators as variables for reusability
const username = page.locator('#username');
const signin = page.locator('#signInBtn');
const itemTitles = page.locator('.card-body a');

//Navigate to the URL - ecoomerce website
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
console.log(await page.title());
// Login with invalid credentials

await page.locator('#username').fill('rahulshetty');
await page.locator("[type='password']").fill('learning');
await page.locator("#signInBtn").click();

// Extract the text of the error message
console.log(await page.locator("[style*='block']").textContent())
await expect(page.locator("[style*='block']")).toContainText('Incorrect');

//type - fill

await username.clear();
await username.fill('rahulshettyacademy');
await signin.click();

// Grab the text of the first link/item using 'first()' and 'nth()' methods

//console.log(await itemTitles.first().textContent());
//console.log(await itemTitles.nth(1).textContent());

// Grab the total number of items on the page and print them using 'allTextContents()' method

const allItems = await itemTitles.allTextContents();
console.log(allItems);

});

test('UI Controls test', async ({page}) => {
    //Navigate to the URL - ecoomerce website
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const username = page.locator('#username')
const signin = page.locator('#signInBtn')
const itemTitles = page.locator('.card-body a');
const dropdown = page.locator("select.form-control");
await dropdown.selectOption('consult');
const blinkingText = page.locator(".blinkingText");
//await page.pause()
await page.locator("//input[@value='user']").click();
await page.locator("#okayBtn").click();
await expect(page.locator(".radiotextsty").last()).toBeChecked();
//Assertion for radio button
//await page.pause()
//checkbox - Radiobutton
await page.locator("#terms").click();
await expect(page.locator("#terms")).toBeChecked();
//await expect(page.locator("#terms").ischecked()).toBeFalsy();
//Blinking text - Visual testing
await expect(blinkingText).toHaveAttribute('class', 'blinkingText');

}); 

test('Handling Child Windows and Tabs', async ({browser}) => {

const context = await browser.newContext();
const page = await context.newPage();
    //Navigate to the URL - ecomerce website
    //intercept and abort css in loading
   // page.route('**/*.{jpg,png,jpeg}', route => route.abort())
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const blinkingText = page.locator(".blinkingText");
 page.on('request', request => console.log(request.url()))
page.on('response', response => console.log(response.url(), response.status()))
const [newpage] = await Promise.all(
[context.waitForEvent('page'), // Listen for the new page event - pending, rejected , fullfilled
 blinkingText.click(),

])// Click on the link that opens a new tab

const  text = await newpage.locator(".red").textContent();
console.log(text);
const arraytext = text.split("@")
console.log(arraytext);
const domain = arraytext[1].split(" ")[0];
console.log(domain);
await page.locator("#username").fill(domain);
await page.locator("#username").textContent();
await page.locator("#username").inputValue();



}); 