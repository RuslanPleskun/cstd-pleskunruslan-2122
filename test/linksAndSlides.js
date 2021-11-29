const {Builder, By, Key} = require('selenium-webdriver');

describe('Tests', function() {
  it('Links and slides', async function() {
    const driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();

    await driver.get('https://ruslanpleskun.github.io/cstd-pleskunruslan-2122/');
    await driver.findElement(By.id('season')).click();
    await driver.sleep(3000);
    await driver.findElement(By.css("a[title='Rick and Morty']")).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.navigate().refresh();
    await driver.findElement(By.linkText('United States')).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.navigate().refresh();
    await driver.findElement(By.xpath("//section[@id='seasons']/article[@class='season']//a[@title='Cartoon Network']")).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.findElement(By.xpath("//section[@id='seasons']/article[@class='season']//a[@title='Adult Swim']")).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.findElement(By.xpath("//section[@id='seasons']/article[@class='season']//a[@title='Pilot (Rick and Morty)']")).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.navigate().refresh();
    await driver.findElement(By.xpath("//button[@class='next']")).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//button[@class='prev']")).click();
    await driver.sleep(3000);
    await driver.findElement(By.css('video')).click();
    await driver.sleep(10000);
    await driver.findElement(By.css('video')).click();
    await driver.sleep(3000);

    await driver.quit();
  });
});
