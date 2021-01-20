import { GoogleResultsPage } from "./GoogleResultsPage"
const SEARCH_FIELD = 'input[type=text]';
const SEARCH_BUTTON = 'input[name=btnK]';
const url = "http://www.google.com";

export class GooglePage {
  constructor() {

  }
  static load() {
    cy.visit(url);
  }
  type(query) {
    cy.get(SEARCH_FIELD) // 2 seconds
      .type(query);
  }
  pressSearch() {
    cy.get(SEARCH_BUTTON).eq(0).click( {force: true} );
    return new GoogleResultsPage();
  }
  titleContains(text) {
    cy.title().should('include', text)
  }

}