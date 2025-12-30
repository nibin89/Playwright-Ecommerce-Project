
# Playwright E-commerce Automation Project

A comprehensive end-to-end test automation framework built with Playwright for testing e-commerce applications.

## 🚀 Features

- **Page Object Model (POM)** architecture for maintainable tests
- **Cross-browser testing** (Chromium, Firefox, WebKit)
- **Parallel test execution** for faster results
- **Detailed HTML reports** with screenshots and traces
- **CI/CD ready** with GitHub Actions support
- **API testing** capabilities
- **Visual regression testing**
- **Custom fixtures and utilities**

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/nibin89/Playwright-Ecommerce-Project.git
cd Playwright-Ecommerce-Project
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 📁 Project Structure

```
Playwright-Ecommerce-Project/
├── tests/
│   ├── e2e/                    # End-to-end test specs
│   ├── api/                    # API test specs
│   └── visual/                 # Visual regression tests
├── pages/                      # Page Object Models
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── fixtures/                   # Custom fixtures
├── utils/                      # Helper functions
├── test-data/                  # Test data files
├── playwright.config.ts        # Playwright configuration
├── package.json
└── README.md
```

## 🧪 Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode
```bash
npm run test:headed
```

### Run tests in a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run a specific test file
```bash
npx playwright test tests/e2e/login.spec.ts
```

### Run tests with UI mode
```bash
npm run test:ui
```

### Debug tests
```bash
npx playwright test --debug
```

## 📊 Reports

### View HTML report
```bash
npm run report
```

### Generate and open report automatically
```bash
npx playwright show-report
```

## 🎯 Test Scenarios Covered

### User Authentication
- User login with valid credentials
- Login validation with invalid credentials
- User registration
- Password reset functionality
- Session management

### Product Management
- Product search functionality
- Product filtering and sorting
- Product details verification
- Add to cart functionality
- Wishlist operations

### Shopping Cart
- Add/remove items from cart
- Update item quantities
- Apply discount codes
- Cart persistence across sessions
- Calculate totals and taxes

### Checkout Process
- Guest checkout
- Registered user checkout
- Multiple payment methods
- Shipping address validation
- Order confirmation

### Order Management
- View order history
- Order tracking
- Cancel/modify orders
- Download invoices

## ⚙️ Configuration

Edit `playwright.config.ts` to customize:
- Base URL
- Browser settings
- Timeouts
- Screenshot and video settings
- Report configurations
- Retry logic

Example configuration:
```typescript
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 2,
  workers: 4,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'https://your-ecommerce-site.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
});
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
BASE_URL=https://your-ecommerce-site.com
TEST_USER_EMAIL=testuser@example.com
TEST_USER_PASSWORD=SecurePassword123
API_KEY=your_api_key_here
```

## 🚀 CI/CD Integration

This project includes GitHub Actions workflow for automated testing.

The tests run automatically on:
- Push to main branch
- Pull requests
- Scheduled runs (daily)

View `.github/workflows/playwright.yml` for configuration details.

## 📝 Writing Tests

Example test structure:

```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';

test.describe('E-commerce User Journey', () => {
  test('User can purchase a product', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    
    await loginPage.navigate();
    await loginPage.login('user@example.com', 'password');
    
    await productPage.searchProduct('Laptop');
    await productPage.addToCart();
    
    // Add more steps...
  });
});
```

## 🐛 Troubleshooting

### Tests are failing intermittently
- Increase timeout values in `playwright.config.ts`
- Add explicit waits for dynamic content
- Check network stability

### Browser installation issues
```bash
npx playwright install --force
```

### Clear test cache
```bash
npx playwright test --clear-cache
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Nibin**
- GitHub: [@nibin89](https://github.com/nibin89)

## 🙏 Acknowledgments

- Playwright Team for the amazing framework
- Open source community for inspiration and support

## 📞 Contact

For questions or support, please open an issue in the GitHub repository.

---

**Happy Testing! 🎭**
