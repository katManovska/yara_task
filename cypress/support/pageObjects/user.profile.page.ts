class UserProfilePage {
    get userName(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('h4');
    }
}

export default new UserProfilePage();