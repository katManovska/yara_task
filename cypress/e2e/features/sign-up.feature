Feature: Sign up

    Scenario: Sign up with non-existing user
        Given as a guest user I am on the website
        When I click Need an account link
        And I enter username in the Username field
        And I enter non-registered email in the email field
        And I enter password in the password field
        And I click Sign in button
        Then I am signed up to the application