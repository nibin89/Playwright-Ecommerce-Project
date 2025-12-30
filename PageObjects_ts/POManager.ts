
import { Loginpage } from './Loginpage'
import { Dashboardpage } from './Dashboardpage'
import { CartPage } from './CartPage'
import { OrdersReviewPage } from './OrdersReviewPage'
import { OrdersHistoryPage } from './OrdersHistoryPage'
import { Page } from '@playwright/test';

export class POManager {

    page: Page
    loginpage: Loginpage
    dashboardPage: Dashboardpage
    cartPage: CartPage
    orderReviewPage: OrdersReviewPage
    ordersHistoryPage: OrdersHistoryPage

    constructor(page: Page) {
        this.page = page;
        this.loginpage = new Loginpage(this.page);
        this.dashboardPage = new Dashboardpage(this.page);
        this.cartPage = new CartPage(this.page);
        this.orderReviewPage = new OrdersReviewPage(this.page)
        this.ordersHistoryPage = new OrdersHistoryPage(this.page)

    }

    getLoginPage() {
        return this.loginpage
    }

    getDashboardPage() {

        return this.dashboardPage

    }

    getCartPage() {
        return this.cartPage;
    }

    getOrderReviewPage() {

        return this.orderReviewPage;
    }

    getOrdersHistoryPage() {
        return this.ordersHistoryPage;

    }

}
module.exports = { POManager }