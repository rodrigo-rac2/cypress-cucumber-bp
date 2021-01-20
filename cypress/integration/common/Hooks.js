import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { GooglePage } from "../../support/pages/GooglePage";
import { After, Before, beforeEach, afterEach } from "cypress-cucumber-preprocessor/steps";

Given('I open Google page', () => {
    GooglePage.load()
  })
  
Before: () => {
    // run before all tests
}

beforeEach: () => {
    //run before each test
}

afterEach: () => {
    //run after each test
}

After: () => {
    //run after all tests
}
