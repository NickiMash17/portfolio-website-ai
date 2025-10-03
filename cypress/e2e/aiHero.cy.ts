describe('AIHero Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display hero section with correct content', () => {
    cy.get('#hero').should('be.visible');
    cy.get('#hero').contains("Nicolette");
    cy.get('#hero').contains("Software Developer");
  });

  it('should have responsive layout on mobile', () => {
    cy.viewport('iphone-6');
    cy.get('#hero').should('have.class', 'flex-col');
  });
});
