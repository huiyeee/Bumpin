describe ('Authentcation', () => {
    it ('launches', () => {
        cy.login(); 
        cy.visit ('/');
    });
    it ('welcome text', () => {
        cy.login();
        cy.visit ('/');
        cy.get('[data-cy=main-text]').should('contain', `Welcome to Bumpin`);
    });
    it ('logout', () => {
        cy.login();
        cy.visit ('/');
        cy.get('[data-cy=signout-button]').should('contain', `Sign Out`);
        cy.get('[data-cy=signout-button]').click();
    });
    it ('signin', () => {
        cy.visit ('/');
        cy.get('[data-cy=sign-in-button]').should('contain', `Sign In`);
    });
    it ('Can enter hallway', () => {
        cy.login();
        cy.visit ('/');
        cy.get('[data-cy=enter-button]').should('contain', `Enter`);
        cy.get('[data-cy=enter-button]').click();
    });
});