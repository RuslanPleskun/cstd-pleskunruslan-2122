const {Builder, By, Key} = require('selenium-webdriver');
const assert = require('assert');
const should = require('chai').should();

// describe docblock
describe('Tests', function() {
  // it block
  it('first test', async function() {
    const driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.wikipedia.org/');

    await driver.findElement(By.id('searchInput')).sendKeys('The USA', Key.RETURN);

    await driver.quit();
  });
  it('second test', async function() {
    const driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.wikipedia.org/');

    await driver.findElement(By.id('searchInput')).sendKeys('The USA', Key.RETURN);

    await driver.quit();
  });
});
