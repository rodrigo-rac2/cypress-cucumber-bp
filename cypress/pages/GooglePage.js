const SEARCH_FIELD = 'input[type=text]';
const SEARCH_BUTTON = 'input[type=submit]';
const url = "http://www.google.com";

export class GooglePage {
  constructor() {

  }
  static load() {
    cy.visit(url);
  }
  static type(query) {
    cy.get(SEARCH_FIELD) // 2 seconds
      .type(query);
  }
  static pressSearch() {
    cy.get(SEARCH_BUTTON).contains(SEARCH_TEXT)
      .click();
    return new GoogleResultsPage();
  }
  titleContains(text) {
    cy.title().should('include', text)
  }

}