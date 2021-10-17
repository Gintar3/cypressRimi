Cypress.Commands.add("Login", () => {
    cy.visit('https://login.onrimi.net/SSO_WEB/Account/Login')
    cy.get('.CybotCookiebotDialogBodyButton').contains('Accept All').click()
    cy.get('#countrySelectionComboBox').select('Lithuania').should('have.value', 'lt')
    cy.get('#submitButton').contains('Next').click()
    cy.get('.section-content__title').contains('Log-in')
    cy.get('#inputPhoneOrEmail').type('testuojuapsa@gmail.com')
    cy.get('#inputPassword').type('man0r1m1')
    cy.get('#loginButton').contains('Login').should('be.visible').click()
    cy.get('#logoutLink').click()
       
})