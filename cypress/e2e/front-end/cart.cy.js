/// <reference types="cypress" />

describe('Añadir articulo al carrito', () => {

    beforeEach(() => {
      cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
      cy.get('#LogoContent > a > img').click();
      cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=DOGS"] > img').click();
      cy.get(':nth-child(7) > :nth-child(1) > a').click();
      cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click();
      cy.get('.Button').click();    
    })
  

    it('JPS-FT-008: FE | Adicion de Producto al Carrito', () => {
       
        cy.get('tbody > :nth-child(2) > :nth-child(3)').should('be.visible')
        cy.screenshot();
    })

    it('JPS-FT-009: FE | Eliminacion de Producto del Carrito', () => {
        cy.get(':nth-child(8) > .Button').click();
        cy.get('td > b').should('be.visible')
        cy.screenshot();
      })
})
