import { Given } from "cypress-cucumber-preprocessor/steps";
import { GooglePage } from "../../pages/GooglePage";

Given('I open Google page', () => {
  GooglePage.load()
})

Then(`I see {string} in the title`, (title) => {
  let googlePage = new GooglePage()
  return googlePage.titleContains(title)
})