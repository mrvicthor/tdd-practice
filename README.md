# Shopping Cart

A TDD practice exercise suggested by Jason Gorman in his book on the subject - Codemanship - TDD.

## Instructions

Test-drive some code that will calculate the total net value of items in a shopping cart represented as a list of unit price and quantity - e.g. {{10.0, 5}, {25.5, 2}}, with the following discounts applied:

- If total gross value > £100, apply a 5% discount
- If total gross value > £200, apply a 10% discount

## Test List

- Add single item to cart
- Add multiple quantities of a single item to cart
- Add two different items with different quantities to the cart
- Get gross value for single item in the cart
- Get gross value of multiple single items in the cart
- Get gross value for two different items with different quantities in the cart
- Get total gross value with unit prices of varying decimal values
- Get total gross value
- Get total net value
- Apply 5% discount if total gross value is over £100
- Don't apply 5% discount if total gross value is equal to £100
- Apply 10% discount if total gross value is over £200
- Apply 5% discount (not 10%) if total gross value is equal to £200
- Get '£0.00' as gross value if cart is empty
- Get '£0.00' as net value if cart is empty
- Extend currency formatter to use different currencies
