import { expect, type Locator, type Page } from '@playwright/test';

let message1: string = "Hello"
message1 = "Bye"
console.log(message1)

let numbers1: any = [1, 2, 3]
numbers1 = ["nibin", "Mathew"]
console.log(numbers1)

function add(a :number,b:any) :any
{

    return a+b
}
add(3,"34")
console.log(add)

let user : {name:string, age:number} = {name :"bob", age:34  }
console.log(user.name, user.age)

class CartPage {

constructor(page: Page) {
        this.page = page;
        this.cartProducts = page.locator("div li").first()
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
        this.checkout = page.locator("text=Checkout");

}
    }

    