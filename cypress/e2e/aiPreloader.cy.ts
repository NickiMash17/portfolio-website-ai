describe('AIPreloader Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the loading screen with progress bar and steps', () => {
    cy.get('[aria-label="AI Portfolio Loading Screen"]').should('exist');
    cy.get('h2').contains('Nicolette Mashaba').should('be.visible');
    cy.get('p').contains('Software Developer & AI Enthusiast').should('be.visible');
    cy.get('div[role="status"]').should('contain.text', 'Loading progress');
  });

  it('should progress through loading steps and reach 100%', () => {
    cy.get('div[role="status"]').should('contain.text', 'Loading progress');
    cy.wait(7000); // wait for progress to complete (approximate)
    cy.get('div[role="alert"]').should('have.attr', 'aria-busy', 'false');
  });
});
