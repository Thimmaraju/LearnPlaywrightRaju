import { expect } from "@playwright/test"

exports.addemployeePage =  class addemployeePage{


    constructor(page){

        this.page = page
        
        this.addemplouyeeSubmenu = page.locator("//a[text()='Add Employee']")
        this.firstnameInput = page.locator('input[name="firstName"]')
        this.lastnameInput = page.locator('input[name="lastName"]')
        this.saveBtn = page.locator('button[type="submit"]')
        this.personalDegtailsHeader = page.locator("//h6[text()='Personal Details']")
        this.errorMegForFirstname = page.locator("(//span[text()='Required'])[1]")
        this.errorMegForLastname = page.locator("(//span[text()='Required'])[2]")
        this.uploadfileBtn = page.locator('input[type="file"]')

       
    }

    async navigatetoAddEmployee(){

        await this.addemplouyeeSubmenu.click()
    }

    async  addEmployee(firstName, lastName){

        await this.firstnameInput.fill(firstName)
        await this.lastnameInput.fill(lastName)
    
    }

    async clickSave(){

         await this.saveBtn.click()
    }

    async createEmpSuccess(){

        await expect(this.personalDegtailsHeader).toBeVisible()
    }

    async verifyErroeMesasages(){


        await expect(this.errorMegForFirstname).toBeVisible()
        await expect(this.errorMegForLastname).toBeVisible()
    }

    async uploadfile(path){

        await this.uploadfileBtn.setInputFiles(path)
    }


   
}

