import userData from '../fixtures/users/userData.json'
import loginPage from '../pages/loginPage'
import transactionPage from '../pages/transactionPage'

const login = new loginPage()
const transaction = new transactionPage()

describe('Real World App - Testing Exercise', () => {
  it('MONEY TRANSFER [SUCCESS]', () => {
    login.accessLoginPage()
    login.loginWithAnyUser(userData.validUserCredentials.username, userData.validUserCredentials.password)
    transaction.accesstransactionPage()
    transaction.selectContact(userData.transactionContacts.Ruthie)
  })
})