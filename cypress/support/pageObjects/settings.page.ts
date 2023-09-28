export const selectors = {
    profilePicUrlField: 'input[placeholder="URL of profile picture"]',
    shortBioField: 'textarea[placeholder="Short bio about you"]',
    updateSettingsButton: 'button[type="submit"]',
    updateSettingsText: 'Update Settings'
};

class SettingsPage {

    get profilePicUrlField() {
        return cy.dataCy(selectors.profilePicUrlField);
    }

    get shortBioField() {
        return cy.dataCy(selectors.shortBioField);
    }

    profilePicUrlFieldType(urlPicText: string) {
        return cy.dataCy(selectors.profilePicUrlField).clear() .type(urlPicText);
    }

    shortBioFieldType(bioFieldText: string) {
        return cy.dataCy(selectors.shortBioField).clear().type(bioFieldText);
    }

    updateSettingsButtonClick() {
        return cy.dataCy(selectors.updateSettingsButton).contains(selectors.updateSettingsText).click();
    }
}

export default new SettingsPage();