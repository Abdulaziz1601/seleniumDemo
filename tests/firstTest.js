const { Builder, Key, By } = require("selenium-webdriver");
const assert = require("assert"); // built in nodejs assertion 
let should = require("chai").should();


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

    // assert using node assertion
    //assert.strictEqual(todoText, "Learn Selenium")

    // assert using chai should, chai assertions are popular because they're more human readable

    todoText.should.equal("Learn Selenium");

    // close the browser
    await driver.quit();

}


example();