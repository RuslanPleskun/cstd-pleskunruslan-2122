const {Builder, By, Key} = require('selenium-webdriver');

describe('Tests', function() {
  it('Page Navigation', async function() {
    const driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();

    await driver.get('https://ruslanpleskun.github.io/cstd-pleskunruslan-2122/');
    await driver.findElement(By.id('season')).click();
    await driver.sleep(3000);
    await driver.findElement(By.id('homes')).click();
    await driver.sleep(3000);
    await driver.findElement(By.id('character-profiles')).click();
    await driver.sleep(3000);
    await driver.findElement(By.id('homes')).click();
    await driver.sleep(3000);
    await driver.findElement(By.id('webshops')).click();
    await driver.sleep(3000);
    await driver.findElement(By.id('homes')).click();
    await driver.sleep(3000);
    await driver.navigate().refresh();
    await driver.findElement(By.id('season')).click();
    await driver.sleep(3000);
    await driver.findElement(By.id('character-profiles')).click();
    await driver.sleep(3000);
    await driver.findElement(By.id('webshops')).click();
    await driver.sleep(3000);
    await driver.findElement(By.id('homes')).click();
    await driver.sleep(3000);
    await driver.navigate().refresh();

    await driver.quit();
  });
});
