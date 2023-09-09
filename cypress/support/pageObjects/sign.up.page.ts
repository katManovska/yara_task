class SignUpPage {
    get userNameField(): Cypress.Chainable<any> {
        return cy.get('input[placeholder="Username"]');
    }

    get emailField(): Cypress.Chainable<any> {
        return cy.get('input[type="email"]');
    }

    get passwordField(): Cypress.Chainable<any> {
        return cy.get('input[type="password"]');
    }

    get singInButton(): Cypress.Chainable<any> {
        return cy.get('button[type="submit"]');
    }
}

export default new SignUpPage();