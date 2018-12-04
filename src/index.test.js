import puppeteer from 'puppeteer';
describe('index', () => {
  let page;
  let testData
  beforeAll(async () => {
    jest.setTimeout(30000);
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      args: ['--windows-size=1920,1080']
    });
     testData = [
      {
        Brand: 'Lenovo',
        DeviceName: 'Lenovo P70',
        alert_types: 'Vibration; MP3, WAV ringtones',
        announced: '2015, January',
        battery_c: 'Non-removable Li-Po 4000 mAh battery',
        bluetooth: 'v4.0, A2DP'
      }
    ];
    page = await browser.newPage();
    await page.goto('http://localhost:1234/');
    await page.setRequestInterception(true);
    await page.on('request', request => {
      request.respond({
        content: 'application/json',
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(testData)
      });
    });
  });
  afterAll(() => {
    browser.close();
  });
  it('should have title "Fonoapi app"', async () => {
    const title = await page.title();
    expect(title).toMatch('Fonoapi app');
  });
  describe('searching for device', () => {
    const device = {
      brand: 'lenovo',
      model: 'p70'
    };
    let deviceCard;
    beforeAll(async () => {
      await page.waitForSelector('.search-form');
      await page.type('input[name=brand]', device.brand);
      await page.type('input[name=model]', device.model);
      await page.$eval('.search-btn', btn => btn.click());
      deviceCard = await page.waitForSelector('.device-card');

    });
    it('element with class deviceCard should exist', () => {
      expect(deviceCard).toBeTruthy();
    });
    it("tbody should have as many  children as testData's object  has entries", async () => {
      const tbodyChildElementCount = await page.$eval(
        'tbody',
        element => element.childElementCount
      );
      expect(tbodyChildElementCount).toBe(Object.keys(testData[0]).length);
    });
  });
});
