describe('Navigation Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display navigation menu and respond to clicks', () => {
    cy.get('nav').should('be.visible');
    cy.get('nav button').first().click();
    // Add assertions for scroll or active section changes
  });

  it('should show mobile menu toggle and open menu', () => {
    cy.viewport('iphone-6');
    cy.get('[aria-label="Toggle menu"]').click();
    cy.get('nav').should('contain.text', 'Home');
  });
});
