beforeEach( () => {
    cy.login();
})

describe('Enter the hallway', ()=> {
    it('Enter button', () => {
        cy.visit ('/');
        cy.get('[data-cy=enter-button]').should('contain', `Enter the hallway`);
    })

    it('Click enter button', () => {
        cy.get('[data-cy=enter-button]').click();
        cy.get('[data-cy=main-text]').should('contain', `Hallway`);
    })

    it('Game room and coffee room buttons in the hallway', () => {
        cy.get('[data-cy=game-room-button]').should('contain', `Enter the game room`);
        cy.get('[data-cy=coffee-room-button]').should('contain', `Enter the coffee room`);
    })

    it('Click enter the game room button', () => {
        cy.get('[data-cy=game-room-button]').click();
        cy.get('[data-cy=main-text]').should('contain', `Match`);
    })

    it('Back to the hallway from game room', () => {
        cy.get('[data-cy=leave-room-button]').should('contain', `Leave`);
        cy.get('[data-cy=leave-room-button]').click();
        cy.get('[data-cy=main-text]').should('contain', `Hallway`);
    })

    it('Click enter the coffee room button', () => {
        cy.get('[data-cy=coffee-room-button]').click();
        cy.get('[data-cy=main-text]').should('contain', `Match`);
    })

    it('Back to the hallway from coffee room', () => {
        cy.get('[data-cy=leave-room-button]').should('contain', `Leave`);
        cy.get('[data-cy=leave-room-button]').click();
        cy.get('[data-cy=main-text]').should('contain', `Hallway`);
    })

    it('Back to the home page from hallway', () => {
        cy.get('[data-cy=leave-hallway-button]').should('contain', `Leave`);
        cy.get('[data-cy=leave-hallway-button]').click();
        cy.get('[data-cy=main-text]').should('contain', `Welcome`);
    })
})