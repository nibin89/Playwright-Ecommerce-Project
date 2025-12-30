const { chromium } = require('@playwright/test');
const { POManager } = require('../../PageObjects/POManager');
const { Before,After, BeforeStep,AfterStep,status } = require('@cucumber/cucumber');

Before(async function () {
    const browser = await chromium.launch({
    headless: false
})
    const context = await browser.newContext();
    this.page = await context.newPage();

      // ✅ IMPORTANT: Initialize POManager
  this.poManager = new POManager(this.page);
});



After(async function () {
    console.log("I am last to execute")

})

BeforeStep({}, function () {
  // This hook will be executed before all steps in a scenario with tag @foo
});

AfterStep( async function ({result}) {
  // This hook will be executed after all steps, and take a screenshot on step failure
  if (result.status ===status.FAILED) {
    await this.page.screenshot({path : 'screenshot.png'});
  }
});