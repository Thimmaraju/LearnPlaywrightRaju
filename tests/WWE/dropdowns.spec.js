import { test, expect } from '@playwright/test';

test('Radio example 1 ', async ({ page }) => {


    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    //await page.locator('select[name^="DOB_Month"]').selectOption("APR")

    //await page.locator('select[name^="DOB_Month"]').selectOption("07")

    await page.locator('select[name^="DOB_Month"]').selectOption({index : 8})



})
