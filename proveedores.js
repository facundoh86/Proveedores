const { chromium } = require('playwright');
const fs           = require('fs');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 50 });
    const context = await browser.newContext();
    const page    = await context.newPage();
    await page.goto('https://web.gencat.cat/ca/inici');


    await page.focus('//input[@value="Cerca tràmits, departaments, serveis i molt més."]'); 
    await page.click('//input[@value="Cerca tràmits, departaments, serveis i molt més."]');
    await page.fill('//input[@value="Cerca tràmits, departaments, serveis i molt més."]', 'agenda cultural');

    //await browser.close();
});