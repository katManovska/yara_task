class UserSignedInHomePage {
    get userProfileButton(): Cypress.Chainable<any> {
        return cy.get('a.nav-link');
    }
}

export default new UserSignedInHomePage();