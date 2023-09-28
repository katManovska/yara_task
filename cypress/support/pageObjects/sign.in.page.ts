export const selectors = {
    signInField: 'input[type="email"]',
    passwordField: 'input[type="password"]',
    singInButton: 'button[type="submit"]',
    needAnAccountLink: 'a[href="#register"]',
    needAnAccountText: 'Need an account?',
    list:'li',
    invaldEmailMessage: 'email or password is invalid'
};

class SignInPage {

    get signInButton() {
        return cy.dataCy(selectors.singInButton);
    }

    get needAnAccountLink() {
        return cy.dataCy(selectors.needAnAccountLink).contains(selectors.needAnAccountText);
    }

    get invalidEmailMessage() {
        return cy.dataCy(selectors.list).contains(selectors.invaldEmailMessage);
    }

    signInFieldType(email: string) {
        return cy.dataCy(selectors.signInField).type(email);
    }

    passwordFieldType(password: string) {
        return cy.dataCy(selectors.passwordField).type(password);
    }

    singInButtonClick() {
        return cy.dataCy(selectors.singInButton).click();
    }
}

export default new SignInPage();