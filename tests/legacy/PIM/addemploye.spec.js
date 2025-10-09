import { test, expect } from '@playwright/test';



test('Verify Add employee with Mandatory details', async ({ page }) => {

  let employeedetails = {

     firstname : "Bharath",
     lastname : "J"
  }
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(employeedetails.firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(employeedetails.lastname);

  await page.locator('//input[@type="file"]').setInputFiles('testData/uploadfiles/Cat.jpg')
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});


