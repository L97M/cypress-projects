import userData from '../fixtures/users/userData.json'
import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'

const login = new loginPage()
const dashboard = new dashboardPage()

describe('Orange HRM - Learning Tests', () => {
  it('VALID LOGIN ATTEMPT', () => {
    login.accessLoginPage()
    login.loginWithUser(userData.validCredentials.username, userData.validCredentials.password)
    dashboard.validateLocation()
  })
  
  it('INVALID LOGIN ATTEMPT', () => {
    login.accessLoginPage()
    login.loginWithUser(userData.invalidCredentials.username, userData.invalidCredentials.password)
    login.wrongLoginAlert()
  })
})