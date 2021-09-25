  
//before ( function   ()  {
 //       cy.Login()
 //   })

    it('AddToChart', function (){
       // cy.get('#gotoMyRimi').click()
        cy.visit('https://www.rimi.lt/e-parduotuve')
        cy.get('.CybotCookiebotDialogBodyButton').contains('Sutinku su visais').click()
        cy.get('#search-input').type('Veido pudra UOGA UOGA Liepų medus').get('.form-field__wrapper > button > svg').click()
        cy.get(':nth-child(1) > .js-product-container > .card__details > .card__details-inner > .js-add-to-cart > .button').click()
        cy.wait(500)
        cy.get('.header__top > .button').click()
        cy.get('.cart__checkout > .button').contains('Mokėti').click()
        cy.get(':nth-child(1) > .item__button').contains('Vilnius').click()
        cy.get('[data-gtm-click-name="VILNIUS  | Rimi Panorama"] > .form-field > .form-field__box').click()
        cy.get('.-has-loader').contains('Tęsti').click()
        
    })
