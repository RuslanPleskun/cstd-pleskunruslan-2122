const {Builder, By, Key} = require('selenium-webdriver');
const assert = require('assert');
const should = require('chai').should();

describe('Tests', function() {
  it('Page Navigation', async function() {
    const driver = await new Builder().forBrowser('chrome').build();
    //driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
    await driver.manage().window().maximize();

    await driver.get('https://ruslanpleskun.github.io/cstd-pleskunruslan-2122/');
    //await driver.sleep(3000);
    await driver.findElement(By.id('season')).click();
    await driver.sleep(3000);
    // await driver.findElement(By.css('section:nth-of-type(6) > .order-button')).click();
    // await driver.sleep(3000);
    // await driver.findElement(By.xpath("//a[@href='https://rickandmorty.fandom.com/wiki/Rickipedia']")).click();
    // await driver.sleep(3000);
    // await driver.findElement(By.css('video')).click();
    // await driver.sleep(3000);
//    await driver.findElement(By.xpath("//a[@href='#seasons']")).click();

    await driver.quit();
  });
});
