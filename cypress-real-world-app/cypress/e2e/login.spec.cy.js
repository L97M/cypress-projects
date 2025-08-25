import userData from '../fixtures/users/userData.json'
import loginPage from '../pages/loginPage'

const login = new loginPage()

describe('Real World App - Testing Exercise', () => {
  it('VALID LOGIN ATTEMPT', () => {
    login.accessLoginPage()
    login.loginWithAnyUser(userData.validUserCredentials.username, userData.validUserCredentials.password)

    login.validateSuccessLogin()
  })

  it.only('INVALID LOGIN ATTEMPT', () => {
    login.accessLoginPage()
    login.loginWithAnyUser(userData.invalidUserCredentials.username, userData.invalidUserCredentials.password)
    
    login.validateFailedLogin()
  })
})