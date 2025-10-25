describe("Logar usuário", () => {
    beforeEach(() => {
        cy.visit("https://www.automationpratice.com.br/")
    })

    it("Validar login de usuário", () => {
        cy.contains('a', 'Login').click();
        cy.get('#user').type('alfredotester@gmail.com')
        cy.get('#password').type('alfredotester123')
        cy.get('#btnLogin').click()
        cy.get('#swal2-title').contains('Login realizado').should('be.visible')

    })
}
)