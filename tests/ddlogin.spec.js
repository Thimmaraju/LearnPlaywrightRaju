import { test, expect } from '@playwright/test';
import { loginPage } from "../pages/loginpage.po"
import data from "../testData/logindata.json"

import creds from "../testData/logincreds.json"

let page

let login

test.describe("Verify Login functionality", () => {

    test.beforeEach(async ({ browser }) => {

        page = await browser.newPage()
        login = new loginPage(page)
        await login.launchUrl()
        await login.verifyLogo()

    })

    test('Verify Login with Valid credentials', async () => {

        await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
        await login.loginSuccess()

    })

    test('Verify Login with Valid Username and Invalid Password', async () => {

        await login.loginwithCreds(process.env.APP_USERNAME, data.wrongpassword)
        await login.loginError()

    })

    test('Verify Login with InValid Username and valid Password', async () => {

        await login.loginwithCreds(data.wrongusername, process.env.APP_PASSWORD)
        await login.loginError()

    })

    test('Verify Login with InValid Username and Invalid Password', async () => {

        await login.loginwithCreds(data.wrongusername, data.wrongpassword)
        await login.loginError()

    })


})