
/// <reference types="cypress"/>

    it('Assertions Demo', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('get').click() 
      cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class','query-btn')
        .should('be.visible')
        .and('be.enabled')
        
        expect(true).to.be.true 
        assert.equal(4,'4','Not True') 
    })
  