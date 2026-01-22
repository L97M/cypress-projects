class signUpPage {
    selectorsList() {
        const selectors = {
            allowCookiesButton: "#CybotCookiebotDialogBodyButtonAccept",
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            emailField: "[name='email']",
            countryButton: "[placeholder='Escolha o país']",
            countryOptions: "[type='button']",
            genericListButton: ".text-xs",
            genericListOptions: ".text-left",
            genericCheckboxButton: ".rounded",
            passwordField: "#password[type='password']",
            confirmPasswordField: "[name='confirmPassword']",
            submitButton: "[type='submit']"
        }
        return selectors
    }

    accessPage() {
        cy.visit('/registrar')
        cy.get(this.selectorsList().allowCookiesButton).click()
    }

    fillBasicUserInfo(user) {
        cy.get(this.selectorsList().firstNameField).type(user.firstName)
        cy.get(this.selectorsList().lastNameField).type(user.lastName)
        cy.get(this.selectorsList().emailField).type(user.email)
    }

    fillAdditionalUserInfo(user) {
        cy.get(this.selectorsList().countryButton).click()
        cy.contains(this.selectorsList().countryOptions, 'Brazil').click()
        
        cy.get(this.selectorsList().genericListButton).eq(0).click()
        cy.get(this.selectorsList().genericListOptions).contains('Português').click()
        
        cy.get(this.selectorsList().genericCheckboxButton).eq(0).click()
        
        cy.get(this.selectorsList().genericListButton).eq(1).click()
        cy.get(this.selectorsList().genericListOptions).contains('Pinterest').click()
    }

    fillUserPassword(user) {
        cy.get(this.selectorsList().passwordField).type(user.password)
        cy.get(this.selectorsList().confirmPasswordField).type(user.confirmPassword)
    }

    acceptTerms() {
        cy.get(this.selectorsList().genericCheckboxButton).eq(5).click()
    }

    registration() {
        cy.get(this.selectorsList().submitButton).click()
    }
}
export default signUpPage