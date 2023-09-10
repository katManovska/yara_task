class SignUpPage {
    get userNameField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[placeholder="Username"]');
    }

    get emailField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[type="email"]');
    }

    get passwordField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[type="password"]');
    }

    get singInButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('button[type="submit"]');
    }
}

export default new SignUpPage();