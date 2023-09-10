class SettingsPage {
    get profilePicUrlField(): Cypress.Chainable<any> {
        return cy.get('input[placeholder="URL of profile picture"]');
    }

    get shortBioField(): Cypress.Chainable<any> {
        return cy.get('textarea[placeholder="Short bio about you"]');
    }

    get updateSettingsButton(): Cypress.Chainable<any> {
        return cy.get('button[type="submit"]').contains('Update Settings');
    }
}

export default new SettingsPage();