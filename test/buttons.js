const {Builder, By, Key} = require('selenium-webdriver');

describe('Tests', function() {
  it('Buttons', async function() {
    const driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();

    await driver.get('https://ruslanpleskun.github.io/cstd-pleskunruslan-2122/');
    await driver.findElement(By.id('webshops')).click();
    await driver.sleep(3000);
    await driver.findElement(By.css('section:nth-of-type(1) > .order-button')).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.sleep(3000);
    await driver.navigate().refresh();
    await driver.findElement(By.xpath("//section[@id='webshop']/article/section[2]/button[@class='order-button']")).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.findElement(By.css('section:nth-of-type(3) > .order-button')).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//section[@id='webshop']/article/section[4]/button[@class='order-button']")).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.findElement(By.css('section:nth-of-type(5) > .order-button')).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.sleep(3000);
    await driver.navigate().refresh();
    await driver.findElement(By.xpath("//section[@id='webshop']/article/section[6]/button[@class='order-button']")).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.findElement(By.css('section:nth-of-type(7) > .order-button')).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//section[@id='webshop']/article/section[8]/button[@class='order-button']")).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.findElement(By.css('section:nth-of-type(9) > .order-button')).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.navigate().refresh();
    await driver.sleep(3000);

    await driver.quit();
  });
});
