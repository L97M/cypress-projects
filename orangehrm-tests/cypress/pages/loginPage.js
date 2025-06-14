class loginPage {
    selectorsList() {
        const selectors = {
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            loginButton: '[type="submit"]',
            wrongCredentialAlert: '.oxd-alert'
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
        cy.get('.loader').should('not.exist')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    wrongLoginAlert() {
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default loginPage