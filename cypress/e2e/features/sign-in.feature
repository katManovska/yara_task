Feature: Sign in

    Scenario: Sign in with existing user
        Given as a guest user I am on the website
        When I enter existing email in the email field
        And I enter valid password in the password field
        And I click on Sign in button
        Then I am signed in the application