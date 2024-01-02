Feature: Playwright Assignment

  @task
  Scenario: Task
    Given user visit the base url
    Then user verify the page title
    When user click login
    And user register himself
    # And user log in with valid credentials
    And user is logged in
    And user select currency as "EUR"
    And user select main menu as "Men" and sub-menu as "Body & Shower"
    And user add items of "Body & Shower" in cart
    And user select main menu as "Men" and sub-menu as "Fragrance Sets"
    And user add items of "Fragrance Sets" in cart
    And user select main menu as "Men" and sub-menu as "Pre-Shave & Shaving"
    And user add items of "Pre-Shave & Shaving" in cart
    And user select main menu as "Men" and sub-menu as "Skincare"
    And user add items of "Skincare" in cart
    And user click on checkout button
    Then user verify items count in cart "first time"
    And user verify total price "first time"
    When user click on edit cart button
    Then user verify total amount is 200
    When user select currency as "USD"
    Then user verify total amount is 200
    When user select currency as "GBP"
    Then user verify total amount is 200
    When user select currency as "EUR"
    Then user verify total amount is 200
    When user select main menu as "Fragrance"
    Then user verify product count is 15
    When user click on checkout button
    Then user verify items count in cart "second time"
    Then user verify total price "second time"