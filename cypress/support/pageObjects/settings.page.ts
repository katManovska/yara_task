class SettingsPage {
    get profilePicUrlField() {
        return cy.dataCy('input[placeholder="URL of profile picture"]');
    }

    get shortBioField() {
        return cy.dataCy('textarea[placeholder="Short bio about you"]');
    }

    get updateSettingsButton() {
        return cy.dataCy('button[type="submit"]').contains('Update Settings');
    }
}

export default new SettingsPage();