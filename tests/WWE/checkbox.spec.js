import { test, expect } from '@playwright/test';

test('Cehck box example 1 ', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    await expect(page.locator('#checkBoxOption1')).not.toBeChecked()

    const Checkboxonestatus = await page.locator('#checkBoxOption1').isChecked()

    if (!Checkboxonestatus) {

        await page.locator('#checkBoxOption1').check()

        await expect(page.locator('#checkBoxOption1')).toBeChecked()

        await page.waitForTimeout(4000);

        await page.locator('#checkBoxOption1').uncheck()
        await expect(page.locator('#checkBoxOption1')).not.toBeChecked()

    }

})


test('Cehck box example 2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'PIM' }).click();

    const checkboxes = ['//input[@value="2"]', '//input[@value="6"]', '//input[@value="9"]']

    for(let checkbox of checkboxes){

        await page.locator(checkbox).check({force:true})
    } 
})


test('Cehck box example 3', async ({ page }) => {

        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

        const checkboxes = await page.$$('//input[@type="checkbox"]')

        for (let checkbox of checkboxes){

            await checkbox.check()
        }

        await page.waitForTimeout(3000)

           for (let checkbox of checkboxes){

            await checkbox.uncheck()
        }


})


test('Calendar 1', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Claim' }).click();

    await page.locator('(//div[@class="oxd-date-input"]/input)[1]').fill("2021-05-10")

    //2021-05-10


})