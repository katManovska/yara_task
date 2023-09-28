export const selectors = {
    userProfileButton1: 'a[href="#@',
    userProfileButton2: '"]',
    settingsButton: 'a[href="#settings"]',
};

class UserSignedInHomePage {
    userProfileButton(userName: string) {
        return cy.dataCy(selectors.userProfileButton1 + userName + selectors.userProfileButton2);
    }

    settingsButtonClick() {
        return cy.dataCy(selectors.settingsButton).click();
    }  
}

export default new UserSignedInHomePage();