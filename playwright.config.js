// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries: 1,
     timeout : 40 * 1000,
  expect: {
    timeout: 40 * 1000
  },
  reporter:[ ['html'],
  ['allure-playwright', {
      outputFolder: 'allure-results',
      detail: true,
      suiteTitle: true
    }]
  ],
  use : {
    browserName: 'chromium',
    headless: false,
    screenshot : 'on',
    video : 'on',
    slowMo: 1000,
    trace : 'on', //'retain-on-failure', // record trace when test fails

  },
 
});
module.exports = config

