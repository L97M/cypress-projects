class homePage {
    selectorsList() {
        const selectors = {
          loginButton: "li > .undefined",
          emailField: "[data-cy='email']",
          passwordField: "[data-cy='password']",
          signInButton: ".text-white",
          createHeroButton: "a > .undefined",
          likeButton: "[data-cy='like']",
          homePageGrid: "body"
        }

        return selectors
    }

    accessHomePage() {
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

    notLoggedInLikeAction() {
        cy.get(this.selectorsList().likeButton).eq(0).click()
        cy.get(this.selectorsList().homePageGrid).should('contain', 'You must log in to like')
    }


}

export default homePage