describe('National Geographic Search Scenarios', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    cy.visit('https://www.nationalgeographic.com/');
  });

  it('search button with valid input', () => {
    cy.get('.InlineSearchWrapper').click();

    cy.get('.NGSearchBar__Input')
      .should('be.visible')
      .type('cat', { force: true })
      .type('{enter}');

    cy.contains('Big Cats').click();
  });

  it('search button with empty input', () => {
    cy.get('.InlineSearchWrapper').click();

    cy.get('.NGSearchBar__Input')
      .should('be.visible')
      .type('{enter}');

    cy.contains('Trending Topics').should('exist');
  });

});
