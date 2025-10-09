import { test, expect } from '@playwright/test';

test('Add product', async ({ page }) => {

     await page.goto('https://www.saucedemo.com/v1/index.html')

     await page.locator('#user-name').fill('standard_user')

      await page.locator('#password').fill('secret_sauce')

      await page.locator('#password').press("Enter")

      const prices = await page.locator('.inventory_item_price').allTextContents()

      console.log(prices)

      let sortedAsc = prices.slice().sort((a, b) => parseFloat(a.slice(1)) - parseFloat(b.slice(1)));

      console.log(sortedAsc[0])

      await page.locator(`//div[@class="pricebar"]/div[contains(., "${sortedAsc[0]}")]/../button`).click()

      
})

