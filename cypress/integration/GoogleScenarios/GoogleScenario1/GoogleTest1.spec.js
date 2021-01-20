import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { GooglePage } from "../../../support/pages/GooglePage";
import { GoogleResultsPage } from "../../../support/pages/GoogleResultsPage";

Then(`I see {string} in the title`, (title) => {
  let googlePage = new GooglePage()
  return googlePage.titleContains(title)
})
