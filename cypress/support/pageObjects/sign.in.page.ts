class SignInPage {

      get signInField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[type="email"]');
    }

    get passwordField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[type="password"]');
    }

    get singInButton(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('button[type="submit"]');
    }

    get needAnAccountLink(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('a[href="#register"]').contains('Need an account?');
    }

    get invalidEmailMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('li').contains('email or password is invalid');
    }
}

export default new SignInPage();