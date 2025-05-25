import userData from '../fixtures/users/userData.json'
import homePage from '../pages/homePage'

const home = new homePage()

describe('Cypress Heroes - Testing Exercise', () => {
  it('LOGIN ATTEMPT [SUCCESS]', () => {
    home.accessHomePage()
    home.loginWithAnyUser(userData.validUserCredentials.username, userData.validUserCredentials.password)
    home.validateSuccessLogin()
  })

  it('LIKE ATTEMPT (WHEN NOT LOGGED IN)', () => {
    home.accessHomePage()
    home.notLoggedInLikeAction()
  })
})