const {Builder, By, Key} = require('selenium-webdriver');
const assert = require('assert');
const should = require('chai').should();

describe('Tests', function() {
  it('test', async function() {
    const driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.wikipedia.org/');

    await driver.findElement(By.id('searchInput')).sendKeys('The USA', Key.RETURN);

    await driver.quit();
  });
});
