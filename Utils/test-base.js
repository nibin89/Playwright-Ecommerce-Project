const { test: base, expect } = require("@playwright/test");

const customtest = base.extend({
    testDataForOrder: {
        username: "mathew.nibin89@yahoo.com",
        password: "Toronto@2025",
        productName: "ZARA COAT 3"
    }
});

module.exports = { customtest, expect };