import userData from '../fixtures/users/user-data.json'

describe('Orange HRM - Learning Tests', () => {

  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: '.oxd-alert',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input',
    dateField: '[placeholder="yyyy-dd-mm"]',
    saveButton: '[type="submit"]'
  }

  it.only('VALID LOGIN', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.validUser.username)
    cy.get(selectorsList.passwordField).type(userData.validUser.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Name Test')
    cy.get(selectorsList.middleNameField).clear().type('Middle Name Test')
    cy.get(selectorsList.lastNameField).clear().type('Last Name Test')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherID')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriverLicense')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-04-14')
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
  })
  it('INVALID LOGIN', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.invalidUser.username)
    cy.get(selectorsList.passwordField).type(userData.invalidUser.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})