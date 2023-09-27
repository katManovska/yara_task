import './commands'

Cypress.Commands.add('dataCy', (value) => {
    return cy.get(`${value}`)
  })
  
  declare global {
    namespace Cypress {
      interface Chainable {
        dataCy(value: string): Chainable<JQuery<HTMLElement>>
      }
    }
  }