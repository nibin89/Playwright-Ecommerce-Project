import { test, expect, Locator } from '@playwright/test'
import { Page } from '@playwright/test';
export class Dashboardpage {

    page: Page
    products: Locator
    producttext: Locator
    cart: Locator
    orders: Locator
    
    constructor(page:Page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.producttext = page.locator(".card-body b")
        this.cart = page.locator("[routerlink*='cart']")
        this.orders = page.locator("button[routerlink*='myorders']");




    }

    async searchProductAddCart(productName: string) {
        const titles = await this.producttext.allTextContents();
        console.log(titles);

        //Find the required products count and loop through it
        const count = await this.products.count();

        for (let i = 0; i < count; ++i) {

            // Add to cart only the specified product
            if (await this.products.nth(i).locator("b").textContent() === productName) {

                //Product add to cart - Locator identified using text method
                await this.products.nth(i).getByRole('button', { name: 'Add To Cart' }).click();
                break;

            }
        }

    }

    async navigateToOrders() {
        await this.orders.click();
    }

    async navigatetoCart() {
        await this.cart.click();
        await this.page.waitForLoadState('networkidle');

    }
}


module.exports = { Dashboardpage };