class signUpPage {
    selectorsList() {
        const selectors = {
          firstNameField: "[data-test='signup-first-name']",
          lastNameField: "[data-test='signup-last-name']",
          usernameField: "[data-test='signup-username']",
          passwordField: "[data-test='signup-password']",
          confirmPasswordField: "[data-test='signup-confirmPassword']",
          signUpButton: "[data-test='signup-submit']",
          signInPageTitle: ".SignInForm-paper"
        }

        return selectors
    }

    accessSignUpPage() {
        cy.visit('signup')
        cy.get('.loader').should('not.exist')
    }

    fillUserInfo(firstName, lastName, username, password) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(password)
        cy.get(this.selectorsList().signUpButton).click()
    }

    validateLocation() {
        cy.get(this.selectorsList().signInPageTitle).should('contain', 'Sign in')
    }

    FillUserInfoWithoutPassword(firstName, lastName, username) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
    }

    validateSignUpBlock() {
        cy.get(this.selectorsList().signInPageTitle).should('not.exist')
    }
}

export default signUpPage