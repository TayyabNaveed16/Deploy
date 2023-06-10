const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Add Movie', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Add Movie', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1536, height: 798 })
    await driver.findElement(By.id("basic-nav-dropdown")).click()
    await driver.findElement(By.linkText("Add Movie")).click()
    await driver.findElement(By.name("name")).click()
    await driver.findElement(By.name("name")).sendKeys("Hera Pheri")
    await driver.findElement(By.name("releaseDate")).click()
    await driver.findElement(By.name("releaseDate")).sendKeys("2001")
    await driver.findElement(By.name("rating")).click()
    await driver.findElement(By.name("rating")).sendKeys("5")
    await driver.findElement(By.name("URL")).click()
    await driver.findElement(By.name("URL")).sendKeys("www.google.com")
    await driver.findElement(By.css(".btn")).click()
    await driver.findElement(By.linkText("Home")).click()
  })

  it('Delete Movie', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1536, height: 798 })
    await driver.findElement(By.id("basic-nav-dropdown")).click()
    await driver.findElement(By.linkText("Delete Movie")).click()
    await driver.findElement(By.css("input")).click()
    await driver.findElement(By.css("input")).sendKeys("Hera Pheri")
    await driver.findElement(By.css(".btn")).click()
    await driver.findElement(By.linkText("Home")).click()
  })

})
