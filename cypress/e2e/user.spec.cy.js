import userData from '../fixtures/users/userData.json'
import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import myInfoPage from '../pages/myInfoPage.js'
import menuPage from '../pages/menuPage.js'

const login = new loginPage()
const dashboard = new dashboardPage()
const myInfo = new myInfoPage()
const menu = new menuPage()

describe('Orange HRM - Learning Tests', () => {
  it('LOGIN AND USER INFO UPDATE [SUCCESS]', () => {
    login.accessLoginPage()
    login.loginWithUser(userData.validCredentials.username, userData.validCredentials.password)
    dashboard.validateLocation()

    menu.accessMyInfoPage()
    
    myInfo.fillUserNameFields(userData.userInfo.firstName, userData.userInfo.middleName, userData.userInfo.lastName)
    myInfo.fillEmployeeInfo(userData.userInfo.employeeId, userData.userInfo.otherId, userData.userInfo.driversLicense, userData.userInfo.licenseExpiryDate)
    myInfo.fillStatus(userData.userInfo.nacionality, userData.userInfo.maritalStatus)
    
    myInfo.saveForm()
  })
})