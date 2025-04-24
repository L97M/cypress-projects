class myInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            genericField: '.oxd-input',
            dateField: '[placeholder="yyyy-dd-mm"]',
            dateCloseButton: '.--close',
            saveButton: '[type="submit"]',
            genericDropDownField: '.oxd-select-text--active'
        }

        return selectors
    }

    updateUserInfo() {
        cy.get(this.selectorsList().firstNameField).clear().type('my')
        cy.get(this.selectorsList().middleNameField).clear().type('full')
        cy.get(this.selectorsList().lastNameField).clear().type('name')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('empl. id')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('other id')
        cy.get(this.selectorsList().genericField).eq(6).clear().type('driver license id')
        cy.get(this.selectorsList().dateField).eq(0).clear().type('2025-04-22')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericDropDownField).eq(0).click()
        cy.contains('pk12345').click()
        cy.get(this.selectorsList().genericDropDownField).eq(1).click()
        cy.contains('Married').click()
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }
}

export default myInfoPage