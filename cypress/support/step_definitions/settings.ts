import { When, Then} from "@badeball/cypress-cucumber-preprocessor";
import signInPage from "../pageObjects/sign.in.page";
import userSignedInHomePage from "../pageObjects/user.signed.in.header.page";
import settingsPage from "../pageObjects/settings.page";
import randomUser from "../../utils/randomUser";

const urlPicText = randomUser.randomText();
const bioFieldText = randomUser.randomText();

When("I login", () => {
    cy.fixture("user").then((user) => {
        signInPage.signInField.type(user.email)
        signInPage.passwordField.type(user.password)
      });
    signInPage.singInButton.click();
});

When("go to Settings page", () => {
    userSignedInHomePage.settingsButton.click();
});

When("I update user's URL to profile picture", () => {
    settingsPage.profilePicUrlField.type(urlPicText);
});

When("I update user's short bio", () => {
    settingsPage.shortBioField.type(bioFieldText)
});

When("I click Update Settings button", () => {
    settingsPage.updateSettingsButton.click()
});

Then("I see the new settings are displayed", () => {
    settingsPage.profilePicUrlField.type(urlPicText).should('be.visible')
    settingsPage.shortBioField.type(bioFieldText).should('be.visible')
});