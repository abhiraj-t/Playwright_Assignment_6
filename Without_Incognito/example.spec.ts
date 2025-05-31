import { test, expect,Page, Browser, Locator, BrowserContext } from '@playwright/test';
import {webkit,firefox,chromium} from 'playwright'
test('Without Incogito Mode',async ()=>{

    const browser:BrowserContext = await chromium.launchPersistentContext('',{headless:false, channel:'chrome'});
    const page:Page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');

    const emailid:Locator = await page.locator('#user-name');
    const password:Locator = await page.locator('#password');
    const loginButton:Locator = await page.locator("[value='Login']")

    await emailid.fill("standard_user");
    await password.fill("secret_sauce");
    await loginButton.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.screenshot({ path: 'login-success.png' });

})