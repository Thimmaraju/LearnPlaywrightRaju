import { expect } from "@playwright/test"

exports.loginPage =  class loginPage{


    constructor(page){

        this.page = page

        this.logo =  page.locator('//img[@alt="company-branding"]')
        this.usernameInput = page.locator('input[name="username"]')
        this.passwordInput = page.locator('input[type="password"]')
        this.loginBtn = page.locator('button[type="submit"]')
        this.loginErrorMsg = page.locator("//p[text()='Invalid credentials']")

    }

    async launchUrl(){

        this.page.goto("/web/index.php/auth/login")
    }

    async verifyLogo(){

        await expect(this.logo).toBeVisible()
    }

    async loginwithCreds(username, password){

        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()
    }

    async loginError(){

        await expect(this.loginErrorMsg).toBeVisible()
        
    }

    async loginSuccess(){

        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }

}

