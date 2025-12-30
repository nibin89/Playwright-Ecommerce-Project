
class Loginpage {

    constructor(page) {

        this.page =page
        this.username = page.locator("#userEmail")
        this.password = page.locator("#userPassword")
        this.signbutton = page.locator("[value='Login']")
        

    }

    async goto() {

        await this.page.goto("https://rahulshettyacademy.com/client")
    }

    async ValidLogin(username,password) {

        await this.username.fill(username);
        await this.password.fill(password);
        await this.signbutton.click();
        await this.page.locator(".card-body b").waitFor({ state: 'visible', timeout: 60000 });

    }


}

module.exports = {Loginpage};