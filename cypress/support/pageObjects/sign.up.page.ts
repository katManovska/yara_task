class SignUpPage {
    get userNameField() {
        return cy.dataCy('input[placeholder="Username"]');
    }

    get emailField() {
        return cy.get('input[type="email"]');
    }

    get passwordField() {
        return cy.dataCy('input[type="password"]');
    }

    get singInButton() {
        return cy.dataCy('button[type="submit"]');
    }
}

export default new SignUpPage();