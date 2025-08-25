class myInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            genericField: '.oxd-input',
            dateField: '.oxd-date-input',
            dateCloseButton: '.--close',
            saveButton: '[type="submit"]',
            genericDropDownField: '.oxd-select-text--active'
        }

        return selectors
    }

    fillUserNameFields(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeInfo(employeeId, otherId, driversLicense, licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicense)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillStatus(nacionality, maritalStatus) {
        cy.get(this.selectorsList().genericDropDownField).eq(0).click()
        cy.contains(nacionality).click()
        cy.get(this.selectorsList().genericDropDownField).eq(1).click()
        cy.contains(maritalStatus).click()
    }

    saveForm() {
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }
}

export default myInfoPage