import { test, expect } from '@playwright/test';

const jobtitles = {

    // title1: "SDET I",
    // title2: "Automation QA engineer",
    title3: "account Assistant"
}

jobtitles['title4'] = "dfvnkjefn"


for (let title in jobtitles) {


    test(`Verify Add Job title - ${title} `, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Time at Work')).toBeVisible();
        await page.getByRole('link', { name: 'Admin' }).click();
        await page.getByText('Job', { exact: true }).click();
        await page.getByRole('menuitem', { name: 'Job Titles' }).click();
        await page.getByRole('button', { name: ' Add' }).click();
        let randomchars = (Math.random() + 1).toString(36).substring(7);

        if(jobtitles[title] == "account Assistant"){

            jobtitles[title] = "gvlkejhbgfvyu"
        }
        await page.getByRole('textbox').nth(1).fill(jobtitles[title]);
        await page.getByRole('textbox', { name: 'Type description here' }).fill('Automation');
        await page.getByRole('textbox', { name: 'Add note' }).fill('Raju Notes');
        await page.getByRole('button', { name: 'Save' }).click();
        await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();
    });

}

