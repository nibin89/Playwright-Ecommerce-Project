const {test, expect} = require("@playwright/test");

test("Calender validations" , async ({page}) => {

    const monthnumber = '6'
    const  date = '15'
    const year = '2027'
    const expectedlist = [monthnumber,date,year]

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers")

    //click on Calender in Greenkart
    await page.locator("div.react-date-picker__inputGroup").click()


    await page.locator(".react-calendar__navigation__label").click()

    await page.locator(".react-calendar__navigation__label").click()

    await page.getByText(year).click()

    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthnumber) - 1).click()

    await page.locator("//abbr[text()='"+date+"']").click()

    const inputs = await page.locator(".react-date-picker__inputGroup__input")

  for (let i = 0; i < expectedlist.length; i++) {
    const value = await inputs.nth(i).inputValue();
    expect(value).toEqual(expectedlist[i]);
}
})