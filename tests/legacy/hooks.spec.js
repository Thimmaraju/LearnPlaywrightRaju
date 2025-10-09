
import { test, expect } from '@playwright/test';




test.describe(" Group   1 ", () => {



    test.beforeEach(() => {

        console.log(" Before each tests ")
    })

    test.afterEach(() => {

        console.log(" After each tests ")
    })

    test.beforeAll(() => {

        console.log("Before All tests one time ")
    })

    test.afterAll(() => {

        console.log("After All tests one time ")
    })

    test("Test case 1", async ({ page }) => {

        console.log("1st Test case ")

    })

    test.skip("Test case 2", async ({ page }) => {

        console.log("2nd Test case ")

    })

})

test.describe(" Group   2 ", () => {
    test("Test case 3", async ({ page }) => {

        console.log("3rd Test case ")

    })

    test("Test case 4", async ({ page }) => {

        console.log("4th Test case ")

    })

})

