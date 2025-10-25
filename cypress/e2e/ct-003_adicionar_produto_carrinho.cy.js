describe('Adicionar a Wishlist', () => {
    beforeEach(() => {
        cy.visit("https://www.automationpratice.com.br/")
    })

    it('passes', () => {
        cy.get('section[id="top_header"] li:nth-child(1) a:nth-child(1)').click()

        // fazer login de usuário
        cy.get('#user').type('alfredotester@gmail.com')
        cy.get('#password').type('alfredotester123')
        cy.get('#btnLogin').click()
        cy.get('#swal2-title').contains('Login realizado').should('be.visible')
        cy.get('body').click(400, 600)

        // ir para página de produto
        cy.get('.offcanvas-toggle.offside-menu').click()
        cy.get('#menuShopText').click()
        cy.get('body > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').click()
        cy.get("div[class='container'] div:nth-child(1) div:nth-child(1) div:nth-child(1) a:nth-child(1) img:nth-child(2)").click()

        // adicionar produto no carrinho
        cy.get('a.theme-btn-one.btn-black-overlay.btn_sm').click()
        cy.get('#swal2-title').contains("Success!").should("be.visible")
        cy.get('body').click(400, 600)

        // verificar carrinho 
        cy.get('div[class="mobile-right-side"] i[class="fa fa-shopping-bag"]').click()

        // valida carrinho
        cy.get('h4.offcanvas-title').contains("Shopping Cart").should("be.visible")
    })

})