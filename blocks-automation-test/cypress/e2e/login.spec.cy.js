import loginPage from "../support/pages/login"
import users from "../fixtures/data/users"

const login = new loginPage()
const user = users.validUser

describe('User Login', () => {
  it('should log in successfully when all required fields are filled with valid credentials', () => {
    login.accessPage()
    login.fillLoginInfo(user)
    login.login()
    cy.assertHomePageLoaded()
  })
})