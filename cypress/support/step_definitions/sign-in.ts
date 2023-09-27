import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import signInPage from "../pageObjects/sign.in.page";
import userSignedInHomePage from "../pageObjects/user.signed.in.header.page";
import randomUser from "../../utils/randomUser";

const invalidEmail = randomUser.randomEmail() + 'invalid';

Given("as a guest user I am on the website", () => {
  cy.visit("");
});

When("I enter existing email in the email field", () => {
  cy.fixture("user").then((user) => {
    signInPage.signInFieldType(user.email)
  });
});

When("I enter valid password in the password field", () => {
  cy.fixture("user").then((user) => {
    signInPage.passwordField.type(user.password)
  });
});

When("I click on Sign in button", () => {
  signInPage.singInButton.click();
});

Then("I am signed in the application", () => {
  cy.fixture("user").then((user) => {
    userSignedInHomePage.userProfileButton(user.name).should('be.visible')
  });  
});

When("I enter invalid email in the email field", () => {
  signInPage.signInFieldType(invalidEmail)
});

Then("I am not signed in the application", () => {
   signInPage.singInButton.should('be.visible')
   signInPage.invalidEmailMessage.should('be.visible')

});