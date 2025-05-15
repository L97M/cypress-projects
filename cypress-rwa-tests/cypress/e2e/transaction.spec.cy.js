import userData from '../fixtures/users/userData.json'
import loginPage from '../pages/loginPage'
import transactionPage from '../pages/transactionPage'

const login = new loginPage()
const transaction = new transactionPage()

describe('Real World App - Testing Exercise', () => {
  it.skip('MONEY TRANSFER [SUCCESS]', () => {
    login.accessLoginPage()
    login.loginWithAnyUser(userData.validUserCredentials.username, userData.validUserCredentials.password)

    transaction.accessTransactionPage()
    transaction.selectContact(userData.transactionContacts.Ruthie)
    transaction.paymentAction(50, 'testing note')
    
    transaction.validatePaymentAction(50, 'testing note')
  })

  it.skip('MONEY TRANSFER [FAIL]', () => {
    login.accessLoginPage()
    login.loginWithAnyUser(userData.validUserCredentials.username, userData.validUserCredentials.password)

    transaction.accessTransactionPage()
    transaction.selectContact(userData.transactionContacts.Ruthie)
    transaction.paymentAction(50, 'testing note')
    
    transaction.validateInvalidPaymentAction()
  })

  it.skip('TRANSACTIONS HISTORY - USER HAS MADE TRANSACTIONS [SUCCESS]', () => {
    login.accessLoginPage()
    login.loginWithAnyUser(userData.validUserCredentials.username, userData.validUserCredentials.password)

    transaction.accessUserTransactionsPage()

    transaction.validateTransactionsHistory()
  })

  it('TRANSACTIONS HISTORY - USER HAS NOT MADE TRANSACTIONS [SUCCESS]', () => {
    login.accessLoginPage()
    login.loginWithAnyUser(userData.validUserCredentials.username, userData.validUserCredentials.password)

    transaction.accessUserTransactionsPage()

    transaction.validateEmptyTransactionsHistory()
  })
})