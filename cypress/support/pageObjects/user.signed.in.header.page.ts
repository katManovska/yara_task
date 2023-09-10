class UserSignedInHomePage {
    userProfileButton(userName): Cypress.Chainable<any> {
        return cy.get('a[href="#@' + userName + '"]');
    }

    get settingsButton(): Cypress.Chainable<any> {
        return cy.get('a[href="#settings"]');
    }  
}

export default new UserSignedInHomePage();