class SignInPage {
    get signInField(): Cypress.Chainable<any> {
        return cy.get('input[type="email"]');
    }

    get passwordField(): Cypress.Chainable<any> {
        return cy.get('input[type="password"]');
    }

    get singInButton(): Cypress.Chainable<any> {
        return cy.get('button[type="submit"]');
    }

    get needAnAccountLink(): Cypress.Chainable<any> {
        return cy.get('a[href="#register"]').contains('Need an account?');
    }

    get invalidEmailMessage(): Cypress.Chainable<any> {
        return cy.get('li').contains('email or password is invalid');
    }
}

export default new SignInPage();