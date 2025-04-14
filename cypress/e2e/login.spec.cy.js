describe('Orange HRM - Learning Tests', () => {

  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: '.oxd-alert'
  }

  const userData = {
    validUser: {
      username: 'Admin',
      password: 'admin123'
    },
    invalidUser: {
      username: 'testing_user',
      password: 'testing_pass'
    }
  }

  it('VALID LOGIN', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.validUser.username)
    cy.get(selectorsList.passwordField).type(userData.validUser.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid).contains('Dashboard')
  })
  it('INVALID LOGIN (USERNAME)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.invalidUser.username)
    cy.get(selectorsList.passwordField).type(userData.invalidUser.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})