Feature: Google

  As a user, I want to open Google's main page

  Scenario: Searching for Google
    Given I open Google page
    When I type "Google" in the search box
    Then I see "Google" in the search results
  