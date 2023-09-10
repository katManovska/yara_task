class UserSignedInHomePage {
    userProfileButton(userName): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('a[href="#@' + userName + '"]');
    }

    get settingsButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('a[href="#settings"]');
    }  
}

export default new UserSignedInHomePage();