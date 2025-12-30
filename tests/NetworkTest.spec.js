const {test, expect, request} = require('@playwright/test');
const { Apiutils } = require('../Utils/Apiutils');
const loginPayLoad = {userEmail:"mathew.nibin89@yahoo.com",userPassword:"Toronto@2025"};
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"6937b3a232ed865871275b97"}]};
const fakePayloadOrders = {data:[], "message":"No Orders"}
 
 
let response;
test.beforeAll( async()=>
{
   const apiContext = await request.newContext();
   const apiUtils = new Apiutils(apiContext,loginPayLoad);
   response =  await apiUtils.createorder(orderPayLoad);
 
})
 
 
//create order is success
test('@API Place the order', async ({page})=>
{ 
    //Set up session storage
    await page.addInitScript(value => {
 
        window.localStorage.setItem('token',value);
    }, response.token );
await page.goto("https://rahulshettyacademy.com/client");

 await page.locator("button[routerlink*='myorders']").click();
 await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");
await page.route("https://rahulshettyacademy.com/api/ecom/user/get-cart-count/6930d8a932ed8658711ddbde",
   async route => {

        const response = await page.request.fetch(route.request)
        let body = JSON.stringify(fakePayloadOrders)
        route.fullfill({
            response,body

        })

        //intecepting response -> APi reposne ->{Playwright Fake response} browser -> render data on front end
    })
    
 await page.locator("button{router*='myorders']").click();
 await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/user/get-cart-count/6930d8a932ed8658711ddbde")
 console.log(await page.locator(".mt-4").textContent())

})
 
