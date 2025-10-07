
import { test, expect } from '@playwright/test';


test('Verify Login with Valid credentials', { tag: ["@smoke", "@regression"] }, async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await expect.soft(page.locator('//img[@alt="company-branding4"]')).toBeVisible()

    await page.locator('//input[@name="username"]').fill("Admin")

    await page.locator("//input[@type='password']").fill("admin123")

    await page.locator("//button[@type='submit']").click()


    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible()


})
