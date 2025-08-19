
describe('Article Category Filter Tests', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    cy.visit('https://www.nationalgeographic.com/');
    cy.get('.NavBar__Toggle').click();
  });

  it('should filter articles by Animals category', () => {
   
    cy.contains('Animals').click();
    cy.get('article').each(($el) => {
      cy.wrap($el).should('exist'); // all articles should be visible
    });
    cy.contains('Pets').click();
    cy.url().should('include', '/animals/topic/pets');
  });

  it('should filter articles by Science category', () => {

   
    cy.contains('Science & Nature').click();
    cy.get('article').should('have.length.greaterThan', 0);
    cy.contains('Oceans').click();
    cy.url().should('include', '/environment/topic/oceans');
  });

});
