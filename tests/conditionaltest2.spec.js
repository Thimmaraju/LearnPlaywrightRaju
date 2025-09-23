// @ts-check
import { test, expect } from '@playwright/test';

test('Open Website Based on Browser', async ({ page, browserName }) => {


     if (browserName == "chromium") {

          await page.goto("https://www.flipkart.com/")
     }
     else if (browserName == "firefox") {

          await page.goto("https://www.amazon.in/")

     }
     else if (browserName == "webkit") {

          await page.goto("https://www.meesho.com/")


     }

})



test('Open Website Based on Browser - Switch', async ({ page, browserName }) => {


     switch (browserName) {
          case "chromium":

               await page.goto("https://www.flipkart.com/")

               break;

          case "firefox":

               await page.goto("https://www.amazon.in/")

               break;

          case "webkit":

               await page.goto("https://www.meesho.com/")

               break;
     }



})