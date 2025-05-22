import userData from '../fixtures/users/userData.json'
import loginPage from '../pages/loginPage'

const login = new loginPage()

describe('Cypress Heroes - Testing Exercise', () => {
  it.only('LOGIN ATTEMPT [SUCCESS]', () => {
    login.accessLoginPage()
    login.loginWithAnyUser(userData.validUserCredentials.username, userData.validUserCredentials.password)
    login.validateSuccessLogin()
  })

  it('LOGIN ATTEMPT [FAIL]', () => {
  })
})