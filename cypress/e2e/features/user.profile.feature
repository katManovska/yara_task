Feature: User profile page

    Scenario: Update user details
        Given as a guest user I am on the website
        When I login
        And go to Settings page
        And I update user's URL to profile picture
        And I update user's short bio
        And I click Update Settings button
        Then I see the new settings are dispslayed