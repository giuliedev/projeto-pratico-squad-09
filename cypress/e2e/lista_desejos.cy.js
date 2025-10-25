describe('template spec', () => {
  it('passes', () => {
    // === navegação ===
    cy.visit('https://automationpratice.com.br/shop') // vai para o site
    
    // === fazer login de usuário ===
    cy.get('section[id="top_header"] li:nth-child(1) a:nth-child(1)').click() // clica no botão "Login"
    cy.get('#user').type('joao@gmail.com') // campo de email
    cy.wait(600)
    cy.get('#password').type('senha12345') // campo de senha
    cy.wait(600)
    cy.get('#btnLogin').click() // botão de login
    cy.wait(600)
    cy.get('body').click(400, 600) // clica na tela para tirar pop-up

    // === ir para página de produto ===
    cy.get('.offcanvas-toggle.offside-menu').click() // clica no menu hamburguer (lateral)
    cy.wait(600)
    cy.get('#menuShopText').click() // botão "Shop" do menu lateral
    cy.wait(600)
    cy.get('body > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').click() // botão "Shop Four Grid" dentro do botão "Shop"
    cy.wait(600)
    cy.get("div[class='container'] div:nth-child(1) div:nth-child(1) div:nth-child(1) a:nth-child(1) img:nth-child(2)").click() // clica no primeiro item do catálogo

    // === adicionar produto na lista de desejos ===
    cy.get('div[class="links_Product_areas"] a[title="Wishlist"]').click() // clica no botão "Add to wishlist"
    cy.wait(600)
    cy.get('body').click(400, 600) // clica na tela para tirar pop-up
    cy.wait(600)

    // verificar lista de desejos
    cy.get('div[class="mobile-right-side"] i[class="fa fa-heart"]').click() // abre lista de desejos
  })
})