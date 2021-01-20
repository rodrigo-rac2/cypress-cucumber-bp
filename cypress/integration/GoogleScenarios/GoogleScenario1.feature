Feature: Google

  As a user, I want to open Google's main page
  
  @focus
  Scenario: Opening Google's main page
    Given I open Google page
    Then I see "Google" in the title
