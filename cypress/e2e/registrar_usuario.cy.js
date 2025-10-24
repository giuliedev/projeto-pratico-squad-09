describe('CT-001 - Registrar um usuário', () => {

    it('Deve registrar um novo usuário com sucesso', () => {
        // Acessa a página de cadastro
        cy.visit('https://automationpratice.com.br/register')

        // Preenche os campos
        cy.get('#user').type('Teste')            // Nome
        cy.get('#email').type('teste@gmail.com') // E-mail
        cy.get('#password').type('123456')       // Senha

        // Clica no botão "Cadastrar"
        cy.get('#btnRegister').click()

        // Valida se o cadastro foi bem-sucedido
        cy.url().should('include', '/my-account') // Página correta após cadastro
        cy.contains('Bem-vindo Teste').should('be.visible') // Mensagem de boas-vindas
    })

})
