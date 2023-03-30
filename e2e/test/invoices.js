const puppeteer = require("puppeteer");

describe("Invoices", async () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  after(async () => {
    await browser.close();
  });

  it("displays a list of invoices", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector('[test-id="invoices-list"]');
  });

  it("displays an invoice", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector('[test-id="invoice-item"]');
    await page.click('[test-id="invoice-item"]');
    await page.waitForSelector('[test-id="invoice"]');
  });

  it("redirects to success page after a successful payment", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector('[test-id="invoice-item"]');
    await page.click('[test-id="invoice-item"]');
    await page.waitForSelector('[test-id="invoice"]');
    await page.click("button");
    await page.waitForSelector('[test-id="invoice-payment-success"]');
  });
});
