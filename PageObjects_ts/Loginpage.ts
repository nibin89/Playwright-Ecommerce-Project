import { test, expect, Locator } from '@playwright/test'
import { Page } from '@playwright/test';
export class Loginpage {

    page: Page
    username: Locator
    password: Locator
    signbutton: Locator

    constructor(page:Page) {

        this.page =page
        this.username = page.locator("#userEmail")
        this.password = page.locator("#userPassword")
        this.signbutton = page.locator("[value='Login']")
        

    }

    async goto() {

        await this.page.goto("https://rahulshettyacademy.com/client")
    }

    async ValidLogin(username: string, password: string) {

        await this.username.fill(username);
        await this.password.fill(password);
        await this.signbutton.click();

        await this.page.locator(".card-body b").first().waitFor({ state: 'visible',timeout: 60000 });

    }


}

module.exports = {Loginpage};