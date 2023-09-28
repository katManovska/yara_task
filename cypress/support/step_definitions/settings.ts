import { When, Then} from "@badeball/cypress-cucumber-preprocessor";
import signInPage from "../pageObjects/sign.in.page";
import userSignedInHomePage from "../pageObjects/user.signed.in.header.page";
import settingsPage from "../pageObjects/settings.page";
import randomUser from "../../utils/randomUser";

const urlPicText = randomUser.randomText();
const bioFieldText = randomUser.randomText();

When("I login", () => {
    cy.fixture("user").then((user) => {
        signInPage.signInFieldType(user.email)
        signInPage.passwordFieldType(user.password)
      });
    signInPage.singInButtonClick();
});

When("go to Settings page", () => {
    userSignedInHomePage.settingsButtonClick();
});

When("I update user's URL to profile picture", () => {
    settingsPage.profilePicUrlFieldType(urlPicText);
});

When("I update user's short bio", () => {
    settingsPage.shortBioFieldType(bioFieldText)
});

When("I click Update Settings button", () => {
    settingsPage.updateSettingsButtonClick()
    cy.intercept('PUT', 'https://api.realworld.io/api/user').as('updateSettings')
    cy.wait('@updateSettings')
});

Then("I see the new settings are displayed", () => {
    userSignedInHomePage.settingsButtonClick();
    settingsPage.profilePicUrlField.should('have.value', urlPicText)
    settingsPage.shortBioField.should('have.value', bioFieldText)
});