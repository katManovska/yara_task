class UserProfilePage {
    get userName() {
        return cy.dataCy('h4');
    }
}

export default new UserProfilePage();