// @ts-check
import { test, expect } from '@playwright/test';

test('Green Cart', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  await page.locator("//h4[text()='Brocolli - 1 Kg']/../div[3]/button").click()

   await page.locator("//h4[text()='Cucumber - 1 Kg']/../div[3]/button").click()

   const price1 = await page.locator("//h4[text()='Brocolli - 1 Kg']/../p[@class='product-price']").textContent() // "120"
  console.log(price1)


   const price2= await page.locator("//h4[text()='Cucumber - 1 Kg']/../p[@class='product-price']").textContent() // "120"
  console.log(price2)

  console.log(Number(price1)+Number(price2))

  const total = await page.locator("//td[text()='Price']/../td[3]/strong").innerText()


  await expect(Number(price1)+Number(price2)).toBe(Number(total))

  
})