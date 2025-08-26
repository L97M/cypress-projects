import users from '../fixtures/users.json'

context('Swag Labs - Login com Sucesso', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    
    it('deve redirecionar para a tela de produtos ao clicar no botão de login', () => {
        cy.login(users.testingUser.username, users.testingUser.password)

        cy.url().should('include', 'v1/inventory.html')
    });
});