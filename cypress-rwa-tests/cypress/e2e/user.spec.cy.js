import userData from '../fixtures/users/userData.json'
import signUpPage from '../pages/signUpPage'

const signUp = new signUpPage()

describe('Real World App - Testing Exercise', () => {
  it.skip('REGISTER NEW USER [SUCCESS]', () => {
    signUp.accessSignUpPage()
    signUp.fillUserInfo(userData.registerUserInfo.firstName, userData.registerUserInfo.lastName, userData.registerUserInfo.username, userData.registerUserInfo.password)
    signUp.validateLocation()
  })

  it('REGISTER NEW USER [FAIL]', () => {
    signUp.accessSignUpPage()
    signUp.FillUserInfoWithoutPassword(userData.registerUserInfo.firstName, userData.registerUserInfo.lastName, userData.registerUserInfo.username)
    signUp.validateSignUpBlock()
  })
})