class transactionPage {
    selectorsList() {
        const selectors = {
          newTransactionButton: "[data-test='nav-top-new-transaction']",
          contactSearchButton: "[data-test='user-list-search-input']",
          ruthieContactButton: "[data-test='user-list-item-M1ty1gR8B3']",
          amountField: "#amount",
          noteField: "[data-test='transaction-create-form']",
          paymentButton: "[data-test='transaction-create-submit-payment']",
          paymentConfirmedMessage: ".css-1hbmzt3-MuiGrid-root",
          anotherTransactionButton: "[data-test='new-transaction-create-another-transaction']",
          returnToTransactionsButton: "[data-test='new-transaction-return-to-transactions']"
        }

        return selectors
    }

    accesstransactionPage() {
        cy.get(this.selectorsList().newTransactionButton).click()
    }

    selectContact(contactName) {
        cy.get(this.selectorsList().contactSearchButton).type(contactName)
        cy.get(this.selectorsList().ruthieContactButton).click()
    }

    paymentAction(value, note) {
        cy.get(this.selectorsList().amountField).type(value)
        cy.get(this.selectorsList().noteField).type(note)
        cy.get(this.selectorsList().paymentButton).click()
    }

    validatePaymentAction(value, note) {
        cy.get(this.selectorsList().paymentConfirmedMessage).should('contain', 'Paid $' + value.toFixed(2) + ' for ' + note)
    }

    validateInvalidPaymentAction() {
        cy.get(this.selectorsList().returnToTransactionsButton).should('not.exist')
    }
}

export default transactionPage