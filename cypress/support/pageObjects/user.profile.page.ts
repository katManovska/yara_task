class UserProfilePage {
    get userName(): Cypress.Chainable<any> {
        return cy.get('h4');
    }
}

export default new UserProfilePage();