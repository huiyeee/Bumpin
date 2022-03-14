describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('welcome text', () => {
        cy.visit ('/');
        cy.get('[data-cy=main-text]').should('contain', `Welcome to Bumpin`);
    });

    it ('login', () => {
        cy.visit ('/');
        cy.login();
    });
});