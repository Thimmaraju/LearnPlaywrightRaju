import { test, expect } from '@playwright/test';


let username = "Admin"

let password = "admin123"

let endpoint = `/web/index.php/auth/login`

test.describe("Verify Login functionality", () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(endpoint)

    })

    test('Verify Login with Valid credentials', { tag: ["@smoke", "@regression"] }, async ({ page }) => {

        test.slow()

        console.log(process.env.APP_USERNAME)

        await page.locator('//input[@placeholder="Username"]').fill(username)

        await page.locator("//input[@type='password']").fill(password)

        await page.locator("//button[@type='submit']").click()

        // verify method1 

        // await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        //or 

        await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible()


    })


    test('Verify Login with Valid Username and Invalid Password', async ({ page }) => {

        await page.locator("//input[@placeholder='Username']").fill(username)

        await page.locator("//input[@type='password']").fill('fejbewhjfb')

        await page.locator("//button[@type='submit']").click()

        // verify method1 

        await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

    })


    test('Verify Login with INValid Username and valid Password', async ({ page }) => {

        const credentials = {

            username: "bvcb",
            password: "admin123"
        }

        credentials['username'] = "erjfbvhjwb"

        await page.locator("//input[@placeholder='Username']").fill(credentials.username)

        await page.locator("//input[@type='password']").fill(credentials.password)

        await page.locator("//button[@type='submit']").click()

        // verify method1 

        await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()



    })


    test('Verify Login with INValid Username and Invalid Password', async ({ page }) => {

        test.fixme()

        await page.locator("//input[@placeholder='Username']").fill('vjfewf')

        await page.locator("//input[@type='password']").fill('admidvbdfbn123')

        await page.locator("//button[@type='submit']").click()

        // verify method1 

        await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

    })

})

