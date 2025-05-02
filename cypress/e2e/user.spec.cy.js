import userData from '../fixtures/users/userData.json'
import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import myInfoPage from '../pages/myInfoPage.js'
import menuPage from '../pages/menuPage.js'

const login = new loginPage()
const dashboard = new dashboardPage()
const myInfo = new myInfoPage()
const menu = new menuPage()

const Chance = require('chance')
const chance = new Chance()

describe('Orange HRM - Learning Tests', () => {
  it('LOGIN AND USER INFO UPDATE [SUCCESS]', () => {
    login.accessLoginPage()
    login.loginWithUser(userData.validCredentials.username, userData.validCredentials.password)
    dashboard.validateLocation()

    menu.accessMyInfoPage()
    
    // myInfo.fillUserNameFields(userData.userInfo.firstName, userData.userInfo.middleName, userData.userInfo.lastName)
    myInfo.fillUserNameFields(chance.first(), chance.string(), chance.last())

    // myInfo.fillEmployeeInfo(userData.userInfo.employeeId, userData.userInfo.otherId, userData.userInfo.driversLicense, userData.userInfo.licenseExpiryDate)
    myInfo.fillEmployeeInfo(chance.string({ casing: 'lower', numeric: false, length: 8 }), chance.string({ casing: 'lower', numeric: false, length: 8 }), chance.integer({ min: 0, max: 100 }), userData.userInfo.licenseExpiryDate)
    
    myInfo.fillStatus(userData.userInfo.nacionality, userData.userInfo.maritalStatus)
    
    myInfo.saveForm()
  })
})