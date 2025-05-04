class dashboardPage {
    selectorsList() {
        const selectors = {
            dashboardGrid: '.orangehrm-dashboard-grid'
        }

        return selectors
    }

    validateLocation() {
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }
}

export default dashboardPage