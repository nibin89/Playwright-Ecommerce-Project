// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries : 1,
  workers: 3,
     timeout : 40 * 1000,
  expect: {
    timeout: 40 * 1000
  },
  reporter:'html',
  projects: [
    {
      name : 'safariexecution',

      use : {
    browserName: 'webkit',
    headless: false,
    screenshot : 'on',
    video : 'on',
    ignoreHttpsError : true,
    permissions : ['geolocation'],
    slowMo: 1000,
    trace : 'on', //'retain-on-failure', // record trace when test fails
   // ...devices['iphone 11']
   //viewport: {width: 720, height:720}

    }},
  {
name : 'chrome',

      use : {
    browserName: 'chromium',
    headless: false,
    screenshot : 'on',
    video : 'on',
    slowMo: 1000,
    trace : 'on', //'retain-on-failure', // record trace when test fails
   // viewport: {width: 720, height:720}


    }, 

  }

    


  ]
  
 
});
module.exports = config

