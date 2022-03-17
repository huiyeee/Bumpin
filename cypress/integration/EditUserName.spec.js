beforeEach( () => {
    cy.login();
})

describe ('EditUserName', () => {
    it ('enter profile', () => {
        cy.visit ('/');
        cy.get('[data-cy=profile-button]').should('contain', `Profile`);
        cy.get('[data-cy=profile-button]').click();
    });

    it ('change user name', () => {
        cy.get('[data-cy=name-label]').clear().type(`DummyUser`)
        cy.get('[data-cy=team-input-button]').click();
        cy.get('[data-cy=team-input]').should('contain', `red`);;
        cy.get('[data-cy=profile-submit-button]').click();
    });

    it ('back to home', () => {
        cy.get('[data-cy=profile-button]').should('contain', `Profile`);
    });

    it ('verify change', () => {
        cy.get('[data-cy=profile-button]').click();
        cy.get('[data-cy=name-label]').should('contain', `DummyUser`);
        cy.get('[data-cy=profile-back-button]').click();
        cy.get('[data-cy=profile-button]').should('contain', `Profile`);
    });
});