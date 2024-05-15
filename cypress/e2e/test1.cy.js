/// <reference types="cypress"/>

it ('Google Search',()=> {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Farenheit para celsius{enter}')
    cy.wait(5000)
    cy.contains('Conversão de Fahrenheit em Celsius',{timeout:3000}).click({ force: true })
    cy.origin('https://www.metric-conversions.org', () => {
        cy.get('.singleArg').type(1)
    })
   // cy.get(':nth-child(1) > .MjjYud > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click({ force: true })
    
} );