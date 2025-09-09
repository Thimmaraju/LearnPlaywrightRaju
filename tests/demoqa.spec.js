import { test, expect } from '@playwright/test';
import data from "../testData/demoqa.json"

test('Verify Demo QA Text box fields', async ({ page }) => {

    await page.goto('https://demoqa.com/')
    await page.locator("(//div[contains(@class,'avatar mx-auto')])[1]").click()
    await page.locator("//li[contains(.,'Text Box')]").click() // 30 Sec 

    await expect(page).toHaveURL('https://demoqa.com/text-box')  // 5 Sec 

    await page.locator("//input[@placeholder='Full Name']").fill(data.fullname)

    await page.locator('#userEmail').fill(data.email)

    await page.locator('#currentAddress').fill(data.currentAddress)
    await page.locator('#permanentAddress').fill(data.permanentaddress)
    await page.locator('#submit').click()

    await expect(page.locator('#name')).toContainText(data.fullname);

})
