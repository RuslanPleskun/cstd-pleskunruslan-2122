const {Builder, By, Key} = require('selenium-webdriver');

describe('Tests', function() {
  it.only('Page Navigation', async function() {
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
  it.only('Links and slides', async function() {
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
    await driver.findElement(By.linkText('Adult Swim')).click();
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
  it.only('Buttons', async function() {
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
