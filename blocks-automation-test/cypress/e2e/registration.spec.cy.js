import signUpPage from "../support/pages/signUp"
import users from "../fixtures/data/users"

const signUp = new signUpPage()
const validUser = users.validUser
const invalidUser = users.invalidUser

describe('User Registration', () => {
  it('should register a new user successfully when all required fields are filled with valid data', () => {
    signUp.accessPage()
    
    signUp.fillBasicUserInfo(validUser)
    signUp.fillAdditionalUserInfo(validUser)
    signUp.fillUserPassword(validUser) 
    
    signUp.acceptTerms()
    
    signUp.registration()
    
    cy.assertHomePageLoaded()
  })

  it('should show an error message when the email field is filled with invalid data', () => {
    signUp.accessPage()
    
    signUp.fillBasicUserInfo(invalidUser)
    
    cy.assertInvalidEmailMessage()
  })

  it('should show an error message when the password and confirm password fields are filled with different data', () => {
    signUp.accessPage()

    signUp.fillBasicUserInfo(validUser)
    signUp.fillAdditionalUserInfo(validUser)
    signUp.fillUserPassword(invalidUser)
    
    cy.assertInvalidPasswordMessage()
  })

  it('should not enable the submit button when the privacy policy and terms of use checkbox is not checked', () => {
    signUp.accessPage()

    signUp.fillBasicUserInfo(validUser)
    signUp.fillAdditionalUserInfo(validUser)
    signUp.fillUserPassword(validUser)
    
    cy.assertTermsNotAcceptedError()
  })
})