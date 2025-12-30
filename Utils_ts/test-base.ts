import { test as base, expect } from '@playwright/test';

interface TestDataForOrder {
    username: string;
    password: string;
    productName: string;
}

export const customtest = base.extend<{testDataForOrder: TestDataForOrder}>({
    testDataForOrder: async ({}, use) => {
        //                ^^^^^^^^^^^^^^^^ ✅ Added this wrapper
        await use({
            username: "mathew.nibin89@yahoo.com",
            password: "Toronto@2025",
            productName: "ZARA COAT 3"
        });
    }
});

export { expect };