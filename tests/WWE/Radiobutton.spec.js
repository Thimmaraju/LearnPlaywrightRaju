import { test, expect } from '@playwright/test';

test('Radio example 1 ', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    await page.locator('//input[@value="radio1"]').check()

     await page.locator('//input[@value="radio1"]').uncheck()

})