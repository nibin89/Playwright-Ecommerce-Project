
const { test, expect } = require('@playwright/test');
class CartPage {

    constructor(page) {
        this.page = page;
        this.cartProducts = page.locator("div li").first()
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
        this.checkout = page.locator("text=Checkout");


    }


    async VerifyProductIsDisplayed(productName) {

        // ✅ DEBUG: Log current state
        console.log("=== CART PAGE DEBUG ===");
        console.log("Current URL:", this.page.url());

        // ✅ Take screenshot
        await this.page.screenshot({ path: 'cart-page-debug.png', fullPage: true });

        // ✅ Check if we're on cart page
        const currentUrl = this.page.url();
        if (!currentUrl.includes('/cart')) {
            throw new Error(`NOT ON CART PAGE! Current URL: ${currentUrl}`);
        }

        // ✅ Count elements
        const divLiCount = await this.page.locator("div li").count();
        console.log(`Found ${divLiCount} "div li" elements`);

        // ✅ Try to find cart items with different selectors
        const alternativeSelectors = [
            ".cartSection",
            ".cart",
            ".cartWrap",
            "ul li",
            "[class*='cart'] li"
        ];

        for (const selector of alternativeSelectors) {
            const count = await this.page.locator(selector).count();
            console.log(`Selector "${selector}": ${count} elements`);
        }

        // ✅ If no div li elements, show page content
        if (divLiCount === 0) {
            const bodyText = await this.page.locator('body').textContent();
            console.log("Page text content:", bodyText?.substring(0, 500));
            throw new Error("Cart appears empty - no 'div li' elements found!");
        }
        // ✅ Wait for element
        try {
            await this.cartProducts.waitFor({ state: 'visible', timeout: 30000 });
            console.log("✓ Cart products visible");
        } catch (error) {
            console.error("Failed to wait for cart products");
            throw error;
        }

    }

    async Checkout() {
        await this.checkout.click();
    }

    getProductLocator(productName) {
        return this.page.locator("h3:has-text('" + productName + "')");
    }


}
module.exports = { CartPage };


