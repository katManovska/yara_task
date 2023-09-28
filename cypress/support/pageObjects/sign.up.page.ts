export const selectors = {
    userNameField: 'input[placeholder="Username"]',
    emailField: 'input[type="email"]',
    passwordField: 'input[type="password"]',
    singInButton: 'button[type="submit"]'
};

class SignUpPage {
    userNameFieldType(userName: string) {
        return cy.dataCy(selectors.userNameField).type(userName);
    }

    emailFieldType(email: string) {
        return cy.get(selectors.emailField).type(email);
    }

    passwordFieldType(password: string) {
        return cy.dataCy(selectors.passwordField).type(password);
    }

    singInButtonClick() {
        return cy.dataCy(selectors.singInButton).click();
    }
}

export default new SignUpPage();