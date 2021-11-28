const {Builder, By, Key} = require('selenium-webdriver');

async function myTests() {
  const driver = await new Builder().forBrowser('chrome').build();

  await driver.get('https://www.wikipedia.org/');

  await driver.findElement(By.id('searchInput')).sendKeys('The USA', Key.RETURN);

  await driver.quit();
}
myTests();
