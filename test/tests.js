const {Builder, By, Key} = require('selenium-webdriver');

describe('Tests', function() {
  it('All Tests', async function() {
    const driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();

    // await driver.sleep(3000);
    await driver.get('http://localhost:3000/login');
    await driver.sleep(3000);
    console.log("Start URL: " + driver.getCurrentUrl());
    await driver.findElement(By.id('user_email')).sendKeys('ewdef@gmail.com');
    await driver.sleep(3000);
    await driver.findElement(By.id('user_pass')).sendKeys('fbjibfoibgbewvkjv');
    await driver.sleep(3000);
    await driver.findElement(By.css("form[method='post'] > input[value='Login']")).click();
    await driver.sleep(3000);
    try{
      let text = await driver.findElement(By.css("div.err-msg")).getText();
    }
    catch{
      console.log("No such email error message found");
    }
    await driver.sleep(3000);
    await driver.findElement(By.id('user_email')).sendKeys('ewdef@gmail.com');
    await driver.sleep(3000);
    await driver.findElement(By.id('user_pass')).sendKeys('fbjibfo');
    await driver.sleep(3000);
    await driver.findElement(By.css("form[method='post'] > input[value='Login']")).click();
    await driver.sleep(3000);
    try{
      let text = await driver.findElement(By.css("div.err-msg")).getText();
    }
    catch{
      console.log("No such password length error message found");
    }
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//body//form//a[@href='./signup']")).click();
    await driver.sleep(3000);
    await driver.findElement(By.id('user_name')).sendKeys('bt');
    await driver.sleep(3000);
    await driver.findElement(By.id('user_email')).sendKeys('mail@gmail.com');
    await driver.sleep(3000);
    await driver.findElement(By.id('user_pass')).sendKeys('qwerty123');
    await driver.sleep(3000);
    await driver.findElement(By.css("input[type=submit]")).click();
    try{
      let text = await driver.findElement(By.css("div.err-msg")).getText();
    }
    catch{
      console.log("No such name length error message found");
    }
    await driver.sleep(3000);
    await driver.findElement(By.id('user_name')).sendKeys('use');
    await driver.sleep(3000);
    await driver.findElement(By.id('user_email')).sendKeys('fdefvevddv');
    await driver.sleep(3000);
    await driver.findElement(By.id('user_pass')).sendKeys('qwerty123');
    await driver.sleep(3000);
    await driver.findElement(By.css("input[type=submit]")).click();
    try{
      let text = await driver.findElement(By.css("div.success-msg")).getText();
    }
    catch{
      console.log("Email error message found");
    }
    await driver.sleep(3000);
    await driver.findElement(By.id('user_name')).clear();
    await driver.findElement(By.id('user_email')).clear();
    await driver.findElement(By.id('user_pass')).clear();
    await driver.sleep(3000);
    await driver.findElement(By.id('user_name')).sendKeys('useuser3');
    await driver.sleep(3000);
    await driver.findElement(By.id('user_email')).sendKeys('fdefvevddvuser3@gmail.com');
    await driver.sleep(3000);
    await driver.findElement(By.id('user_pass')).sendKeys('qwerty123qwerty123');
    await driver.sleep(3000);
    await driver.findElement(By.css("input[type=submit]")).click();
    try{
      let text = await driver.findElement(By.css("div.err-msg")).getText();
    }
    catch{
      console.log("No success email already in use message found");
    }
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//body//form//a[@href='./login']")).click();
    await driver.sleep(3000);
    await driver.sleep(3000);
    await driver.findElement(By.id('user_email')).sendKeys('test@gmail.com');
    await driver.sleep(3000);
    await driver.findElement(By.id('user_pass')).sendKeys('qwerty123');
    await driver.sleep(3000);
    await driver.findElement(By.css("form[method='post'] > input[value='Login']")).click();
    await driver.sleep(3000);



    // await driver.get('https://ruslanpleskun.github.io/cstd-pleskunruslan-2122/');
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

    await driver.findElement(By.id('homes')).click();
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
    await driver.findElement(By.linkText('Cartoon Network')).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.findElement(By.linkText('Adult Swim')).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.findElement(By.linkText('Pilot')).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.navigate().refresh();
    await driver.findElement(By.css(".next")).click();
    await driver.sleep(3000);
    await driver.findElement(By.css(".prev")).click();
    await driver.sleep(3000);
    await driver.findElement(By.css('video')).click();
    await driver.sleep(10000);
    await driver.findElement(By.css('video')).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//div[@class='video-list']//video[contains(@src,'vid-3.mp4')]")).click();
    await driver.sleep(3000);
    await driver.findElement(By.css('video')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath("//div[@class='video-list']//video[contains(@src,'vid-2.mp4')]")).click();
    await driver.sleep(3000);
    await driver.findElement(By.css('video')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath("//div[@class='video-list']//video[contains(@src,'vid-4.mp4')]")).click();
    await driver.sleep(3000);
    await driver.findElement(By.css('video')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath("//div[@class='video-list']//video[contains(@src,'vid-11.mp4')]")).click();
    await driver.sleep(3000);
    await driver.findElement(By.css('video')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath("//div[@class='video-list']//video[contains(@src,'vid-8.mp4')]")).click();
    await driver.sleep(3000);
    await driver.findElement(By.css('video')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath("//div[@class='video-list']//video[contains(@src,'vid-5.mp4')]")).click();
    await driver.sleep(3000);
    await driver.findElement(By.css('video')).click();
    await driver.sleep(5000);
    await driver.findElement(By.css('video')).click();

    await driver.findElement(By.id('homes')).click();
    await driver.findElement(By.id('webshops')).click();
    await driver.sleep(3000);
    await driver.findElement(By.css('section:nth-of-type(1) > .order-button')).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.sleep(3000);
    await driver.navigate().refresh();
    await driver.findElement(By.css("section:nth-of-type(2) > .order-button")).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.findElement(By.css('section:nth-of-type(3) > .order-button')).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.sleep(3000);
    await driver.findElement(By.css("section:nth-of-type(4) > .order-button")).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.findElement(By.css('section:nth-of-type(5) > .order-button')).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.sleep(3000);
    await driver.navigate().refresh();
    await driver.findElement(By.css("section:nth-of-type(6) > .order-button")).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.findElement(By.css('section:nth-of-type(7) > .order-button')).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.sleep(3000);
    await driver.findElement(By.css("section:nth-of-type(8) > .order-button")).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.findElement(By.css('section:nth-of-type(9) > .order-button')).click();
    await driver.sleep(3000);
    await driver.navigate().back();
    await driver.navigate().refresh();
    await driver.sleep(3000);
    // await driver.findElement(By.id('lout')).click();
    // await driver.sleep(3000);
    console.log("End URL: " + driver.getCurrentUrl());
    await driver.sleep(3000);

    await driver.quit();
  });
});
