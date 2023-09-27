class UserSignedInHomePage {
    userProfileButton(userName) {
        return cy.dataCy('a[href="#@' + userName + '"]');
    }

    get settingsButton() {
        return cy.dataCy('a[href="#settings"]');
    }  
}

export default new UserSignedInHomePage();