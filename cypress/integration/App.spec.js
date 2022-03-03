describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('welcome header', () => {
        cy.visit ('/test');
        cy.get('[data-cy=welcome-header]').should('contain', `Welcome to Bump'n`);
    });

    it ('login', () => {
        cy.visit ('/test');
        cy.login();
        cy.get('[data-cy=enter-button]').should('contain', `hallway`);
    });
});