beforeEach( () => {
    cy.login();
})

describe ('EditTeamName', () => {
    it ('enter profile', () => {
        cy.visit ('/');
        cy.get('[data-cy=profile-button]').should('contain', `Profile`);
        cy.get('[data-cy=profile-button]').click();
    });

    it ('change team name', () => {
        cy.get('[data-cy=name-label]').should('contain', `Qing`);
        cy.get('[data-cy=team-input-button]').click();
        cy.get('[data-cy=team-input]').clear().type("red");
        cy.get('[data-cy=profile-submit-button]').click();
    });

    it ('back to home', () => {
        cy.get('[data-cy=profile-button]').should('contain', `Profile`);
    });

    it ('verify change', () => {
        cy.get('[data-cy=profile-button]').click();
        cy.get('[data-cy=team-label]').should('contain', `red`);
        cy.get('[data-cy=profile-back-button]').click();
        cy.get('[data-cy=profile-button]').should('contain', `Profile`);
    });
});