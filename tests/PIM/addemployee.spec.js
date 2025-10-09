import { test, expect } from '@playwright/test';
import { loginPage } from "../../pages/loginpage.po"
import { dashbaordPage } from "../../pages/dasboardpage.po"
import { addemployeePage } from "../../pages/PIM/addemployeepage.po"
import addempdata from "../../testData/addemployee.json"


let page
let login
let dashbaord
let addemp

test.describe("Verify AddEmlpoyee functionality", () => {

    test.beforeEach(async ({ browser }) => {

        page = await browser.newPage()
        login = new loginPage(page)
        dashbaord = new dashbaordPage(page)
        addemp = new addemployeePage(page)
        await login.launchUrl()
        await login.verifyLogo()
        await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
        await login.loginSuccess()
        await dashbaord.navigatetoPIM()
        await addemp.navigatetoAddEmployee()

    })

    test('Verify Add Employee Madatory details', async () => {

        await addemp.addEmployee(addempdata.firstname, addempdata.lastname)
        await addemp.uploadfile('testData/uploadfiles/Cat.jpg')
        await addemp.clickSave()
        await addemp.createEmpSuccess()

    })

    test('Verify error Messages for Madatory fields', async () => {

        await addemp.clickSave()
        await addemp.verifyErroeMesasages()

    })


})