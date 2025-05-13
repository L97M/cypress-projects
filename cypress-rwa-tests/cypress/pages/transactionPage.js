class transactionPage {
    selectorsList() {
        const selectors = {
          newTransactionButton: "[data-test='nav-top-new-transaction']",
          contactSearchButton: "[data-test='user-list-search-input']",
          contactNameButton: "[data-test='user-list-item-M1ty1gR8B3']"
        }

        return selectors
    }

    accesstransactionPage() {
        cy.get(this.selectorsList().newTransactionButton).click()
    }

    selectContact(contactName) {
        cy.get(this.selectorsList().contactSearchButton).type(contactName)
        cy.get(this.selectorsList().contactNameButton).click()
    }
}

export default transactionPage