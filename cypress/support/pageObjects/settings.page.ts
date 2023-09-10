class SettingsPage {
    get profilePicUrlField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[placeholder="URL of profile picture"]');
    }

    get shortBioField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('textarea[placeholder="Short bio about you"]');
    }

    get updateSettingsButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('button[type="submit"]').contains('Update Settings');
    }
}

export default new SettingsPage();