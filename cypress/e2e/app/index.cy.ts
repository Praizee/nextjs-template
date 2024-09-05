describe('Tests Login Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Test login page header', () => {
        cy.get('[data-testId="headline"]').contains('world');
    });

    it('Test login page header', () => {
        cy.getDataTestId('headline').contains('Hello');
    });
});
