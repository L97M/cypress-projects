// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('assertHomePageLoaded', () => {
    cy.get('.loader').should('not.exist')
    cy.get('body').should('contain', 'Login efetuado com sucesso!').and('be.visible')
    cy.wait(15000)
    cy.url().should('include', '/pt/home')
    cy.get('.select-none').as('userAccountButton')
    cy.get('@userAccountButton').should('exist').and('be.visible')
})

Cypress.Commands.add('assertInvalidEmailMessage', () => {
    cy.get('.truncate').as('invalidEmailErrorMessage')
    cy.get('@invalidEmailErrorMessage').should('exist').and('be.visible').contains('This is not a valid email')
})

Cypress.Commands.add('assertInvalidPasswordMessage', () => {
    cy.get('.text-red-600').as('invalidPasswordErrorMessage')
    cy.get('@invalidPasswordErrorMessage').should('exist').and('be.visible').contains('Passwords must match')
})

Cypress.Commands.add('assertTermsNotAcceptedError', () => {
    cy.get("[type='submit']").as('submitButton')
    cy.get('@submitButton').should('be.disabled')
})