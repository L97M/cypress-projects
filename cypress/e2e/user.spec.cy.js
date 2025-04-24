import userData from '../fixtures/users/user-data.json'
import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import myInfoPage from '../pages/myInfoPage.js'
import menuPage from '../pages/menuPage.js'

const login = new loginPage()
const dashboard = new dashboardPage()
const myInfo = new myInfoPage()
const menu = new menuPage()

describe('Orange HRM - Learning Tests', () => {
  it.only('UPDATE USER INFO [SUCCESS]', () => {
    login.accessLoginPage()
    login.loginWithUser(userData.validUser.username, userData.validUser.password)
    dashboard.validateLocation()
    menu.accessMyInfoPage()
    myInfo.updateUserInfo()
  })
  
  it('INVALID LOGIN', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.invalidUser.username)
    cy.get(selectorsList.passwordField).type(userData.invalidUser.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})