class loginPage {
    selectorsList() {
        const selectors = {
          loginButton: "li > .undefined",
          emailField: "[data-cy='email']",
          passwordField: "[data-cy='password']",
          signInButton: ".text-white",
          createHeroButton: "a > .undefined"
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('')
        cy.get('.loader').should('not.exist')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().emailField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
    }

    validateSuccessLogin() {
        cy.get(this.selectorsList().createHeroButton).should('be.visible')
    }

    // validateFailedLogin() {
    //     cy.get(this.selectorsList().loginFailedAlert).should('contain', 'Username or password is invalid')
    // }
}

export default loginPage