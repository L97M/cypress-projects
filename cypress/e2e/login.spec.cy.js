describe('Orange HRM - Learning Tests', () => {
  it('VALID LOGIN', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('[type="submit"]').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
  it('INVALID LOGIN (USERNAME)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('wrong_username')
    cy.get('[name="password"]').type('admin123')
    cy.get('[type="submit"]').click()
    cy.get('.oxd-alert')
  })
})