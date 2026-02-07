import userData from '../fixtures/users/userData.json'
import loginPage from '../pages/loginPage'

const login = new loginPage()

describe('Login Feature', () => {
  it('should log in successfully when valid credentials are provided', () => {
    login.accessLoginPage()
    
    login.validateLoginPage()

    login.loginWithAnyUser(userData.validUserCredentials.username, userData.validUserCredentials.password)
    
    login.validateSuccessLogin()
  })

  it.only('should not log in when invalid credentials are provided', () => {
    login.accessLoginPage()

    login.validateLoginPage()

    login.loginWithAnyUser(userData.invalidUserCredentials.username, userData.invalidUserCredentials.password)
    
    login.validateFailedLogin()
  })
})