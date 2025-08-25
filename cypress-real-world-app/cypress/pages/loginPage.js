class loginPage {
    selectorsList() {
        const selectors = {
          usernameField: "[name='username']",
          passwordField: "[name='password']",
          signInButton: "[type='submit']",
          navBarGrid: "[data-test='sidenav']",
          loginFailedAlert: "[data-test='signin-error']"
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('')
        cy.get('.loader').should('not.exist')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
    }

    validateSuccessLogin() {
        cy.get(this.selectorsList().navBarGrid).should('be.visible')
    }

    validateFailedLogin() {
        cy.get(this.selectorsList().loginFailedAlert).should('contain', 'Username or password is invalid')
    }
}

export default loginPage