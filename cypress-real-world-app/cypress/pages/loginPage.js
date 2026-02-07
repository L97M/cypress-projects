class loginPage {
    selectorsList() {
        const selectors = {
            signInForm: ".SignInForm-form",
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            signInButton: "[type='submit']",
            homeNavBarGrid: "[data-test='sidenav']",
            loginFailedAlert: "[data-test='signin-error']"
        }
        return selectors
    }

    accessLoginPage() {
        cy.visit('')
        cy.get('.loader').should('not.exist')
    }

    validateLoginPage() {
        cy.url().should('include', '/signin')
        cy.get(this.selectorsList().signInForm).should('be.visible')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
    }

    validateSuccessLogin() {
        cy.get(this.selectorsList().homeNavBarGrid).should('be.visible')
    }

    validateFailedLogin() {
        cy.get(this.selectorsList().loginFailedAlert).should('contain', 'Username or password is invalid')
    }
}
export default loginPage