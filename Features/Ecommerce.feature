Feature: Ecommerce validations

@Regression
  Scenario Outline: Placing the Order
    Given A Login to Ecommerce application with "<username>" and "<password>"
    When add "ZARA COAT 3" to Cart
    Then verify "ZARA COAT 3" is displayed in the Cart
    When Enter valid details and place the Order
    Then Verify order is present in orderhistory

Examples:
|username                | password    |
|mathew.nibin89@yahoo.com | Toronto@2025 |
|nibin.babi@gmail.com | IamKing@000 |
|Hello@123.com      | Toronto@2025 |