import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { GooglePage } from "../../../support/pages/GooglePage";
import { GoogleResultsPage } from "../../../support/pages/GoogleResultsPage";

When(`I type {string} in the search box`, (query) => {
  let googlePage = new GooglePage()
  googlePage.type(query)
  googlePage.pressSearch()
})

Then(`I see {string} in the search results`, (resultText) => {
  GoogleResultsPage.queryPage(resultText)
})