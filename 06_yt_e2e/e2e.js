const puppeteer = require('puppeteer');

describe('E2E test', () => {

    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            // args: ['--window-size=1920,1080']
        });
        page = await browser.newPage();
    });

    test('Simple e2e test', async () => {
        await page.goto('https://www.google.com/');
        await page.click('.gLFyf');
        await page.type('.gLFyf', 'jest');
        await page.keyboard.press('Enter');
        await page.close();
    }, 5000);
});
