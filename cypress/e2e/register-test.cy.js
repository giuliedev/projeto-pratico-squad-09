describe("Cadastrar usuário", () => {
    beforeEach(() => {
        cy.visit("https://www.automationpratice.com.br/")
    })

    it("Validar cadastro de usuário", () => {
        cy.contains('a', 'Cadastro').click();
        cy.get("#user").type("Alfredo Tester");
        cy.get("#email").type("alfredotester@gmail.com");
        cy.get("#password").type("alfredotester123");
        cy.get("#btnRegister").click();
        cy.get("#swal2-title").contains("Cadastro realizado!").should("be.visible");

    })
}
)