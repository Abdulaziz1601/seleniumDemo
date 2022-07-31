const { Builder, Key, By } = require("selenium-webdriver");
const assert = require("assert"); // built in nodejs assertion 



async function example() {
    // launch the browser
    let driver = await new Builder().forBrowser('chrome').build();

    // Navigate to our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    // Add a todo
    await driver.findElement(By.id('sampletodotext')).sendKeys("Learn Selenium", Key.RETURN);

    // assert
    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
        return value;
    });

    assert.strictEqual(todoText, "Learn Selenium")

    // close the browser
    await driver.quit();

}


example();