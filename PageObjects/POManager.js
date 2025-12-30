const { Loginpage } = require('./Loginpage')
const { Dashboardpage } = require('./Dashboardpage')
const { CartPage } = require('./CartPage')
const { OrdersReviewPage } = require('./OrdersReviewPage')
const { OrdersHistoryPage } = require('./OrdersHistoryPage')
class POManager {

    constructor(page) {
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