
describe('Open Rimi page', function() {
    it('Login in', function() {
        cy.visit('https://www.rimi.lt/mano-rimi')
        cy.get('.CybotCookiebotDialogBodyButton').contains('Accept All').click()
        cy.get('#headerList > #languageSetter_lt > #selectLanguageLink')
        cy.get('#countrySelectionComboBox').select('Lithuania').should('have.value', 'lt')
        cy.get('#submitButton').contains('Next').click()
        cy.get('#inputPhoneOrEmail').type('testuojuapsa@gmail.com')
        cy.get('#inputPassword').type('man0r1m1')
        cy.get('#loginButton').contains('Login').should('be.visible').click()
        cy.get('#submitButton').contains('Save changes').click()
        cy.get('#logoutLink').click()
        
        
    })
})

   



