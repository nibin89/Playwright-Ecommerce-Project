const {test, expect} =require ('@playwright/test')

//test.describe.configure({mode: 'parallel'})
//test.describe.configure({mode: 'serial'})
test('@Web Pop up Validations test', async({page}) => {

await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
// await page.goto("https://www.google.com/")
// await page.goBack();
// await page.goForward();
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();

page.pause();

//Javascript Alert Pop ups

page.on('dialog', dialog => dialog.accept());

await page.locator("#confirmbtn").click();

//Mouse Hover

await page.locator("#mousehover").hover();

//iframes

const framespage = page.frameLocator("#courses-iframe");
framespage.locator("li a[href*='lifetime-access']:visible").click()

const textcheck = await framespage.locator(".text h2").textContent()

 console.log(textcheck.split("")[1]);






})

test('Screenshot and Visual comparison', async({page}) => {
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#displayed-text").screenshot({path: 'Partialscreenshot.png'})
await page.locator("#hide-textbox").click();
await page.screenshot({path: 'Screenshot.png'})
await expect(page.locator("#displayed-text")).toBeHidden();

})
// Visual testing
//Screesnhot - store- screenshot ->

test('@Web Visual testing with Playwright', async ( {page})=> {

    await page.goto("https://www.google.com")
   expect(await page.screenshot()).toMatchSnapshot('landing.png')


})

