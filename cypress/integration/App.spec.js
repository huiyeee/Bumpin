describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('welcome header', () => {
        cy.visit ('/test');
        cy.get('[data-cy=welcome-header]').should('contain', `Welcome to Bump'n`);
    });
});