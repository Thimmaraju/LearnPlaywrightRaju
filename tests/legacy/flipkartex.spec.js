import { test, expect } from '@playwright/test';

test('Get total price of  2 products ',{tag: "@regression"}, async ({ page }) => {

    await page.goto('https://www.flipkart.com/')

    await page.locator('//input[@name="q"]').fill("samsung s25")

    await page.keyboard.press("Enter")

    const price1 = await page.locator('.Nx9bqj._4b5DiR').nth(0).textContent()

    console.log(price1)

    const price2 = await page.locator('.Nx9bqj._4b5DiR').nth(1).textContent()

    console.log(price2)

    console.log("total = " + (Number(price1.replace("₹", "").replace(",", "")) +Number(price2.replace("₹", "").replace(",", ""))))



})