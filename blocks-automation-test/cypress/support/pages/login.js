class loginPage {
    selectorsList() {
        const selectors = {
            allowCookiesButton: "#CybotCookiebotDialogBodyButtonAccept",
            emailField: "[name='email']",
            passwordField: "[type='password']",
            loginButton: "[type='submit']"
        }
        return selectors
    }

    accessPage() {
        cy.visit('/login')
        cy.get(this.selectorsList().allowCookiesButton).click()
    }

    fillLoginInfo(user) {
        cy.get(this.selectorsList().emailField).type(user.email)
        cy.get(this.selectorsList().passwordField).type(user.password)
    }

    login() {
        cy.get(this.selectorsList().loginButton).click()
    }

  
}
export default loginPage