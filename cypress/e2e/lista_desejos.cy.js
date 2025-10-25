describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationpratice.com.br/shop')
    cy.get('section[id="top_header"] li:nth-child(1) a:nth-child(1)').click()

    // fazer login de usuário
    cy.get('#user').type('joao@gmail.com')
    cy.wait(600)
    cy.get('#password').type('senha12345')
    cy.wait(600)
    cy.get('#btnLogin').click()
    cy.wait(600)
    cy.get('body').click(400, 600)

    // ir para página de produto
    cy.get('.offcanvas-toggle.offside-menu').click()
    cy.wait(600)
    cy.get('#menuShopText').click()
    cy.wait(600)
    cy.get('body > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').click()
    cy.wait(600)
    cy.get("div[class='container'] div:nth-child(1) div:nth-child(1) div:nth-child(1) a:nth-child(1) img:nth-child(2)").click()

    // adicionar produto na lista de desejos
    cy.get('div[class="links_Product_areas"] a[title="Wishlist"]').click()
    cy.wait(600)
    cy.get('body').click(400, 600)
    cy.wait(600)

    // verificar lista de desejos
    cy.get('div[class="mobile-right-side"] i[class="fa fa-heart"]').click()
  })
})