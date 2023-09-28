import { When, Then} from "@badeball/cypress-cucumber-preprocessor";
import signUpPage from "../pageObjects/sign.up.page";
import signInPage from "../pageObjects/sign.in.page";
import userSignedInHomePage from "../pageObjects/user.signed.in.header.page";
import randomUser from "../../utils/randomUser";

const userName = randomUser.randomUsername();
const userEmail = randomUser.randomEmail();
const password = randomUser.randomPassword();

When("I click Need an account link", () => {
  signInPage.needAnAccountLink.click();
});

When("I enter username in the Username field", () => {
  signUpPage.userNameFieldType(userName);
});

When("I enter non-registered email in the email field", () => {
  signUpPage.emailFieldType(userEmail);
});

When("I enter password in the password field", () => {
  signUpPage.passwordFieldType(password);
});

When("I click Sign in button", () => {
  signUpPage.singInButtonClick();
});

Then("I am signed up to the application", () => {
  userSignedInHomePage.userProfileButton(userName).should('be.visible')
});