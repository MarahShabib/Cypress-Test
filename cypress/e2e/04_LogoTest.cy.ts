describe('National Geographic Logo', () => {
  const homeURL='https://www.nationalgeographic.com/'

  beforeEach(() => {
     Cypress.on('uncaught:exception', () => false);
    cy.visit(homeURL);
  });

  it('should be visible in the navbar', () => {
    cy.get('img[alt="National Geographic Logo - Home"]')
      .should('be.visible');
  });

  it('should have the correct src attribute', () => {
    cy.get('img[alt="National Geographic Logo - Home"]')
      .should('have.attr', 'src', 'https://assets-cdn.nationalgeographic.com/natgeo/static/icons/redesign-logo.svg');
  });

  it('should navigate to home when clicked', () => {
     cy.get('img[alt="National Geographic Logo - Home"]').first().should('be.visible')
      .click();
    cy.url().should('eq', homeURL);
  });

   it('should return to home when clicking logo from Photography page', () => {
    cy.visit('https://www.nationalgeographic.com/photography');
     cy.get('img[alt="National Geographic Logo - Home"]').first()
      .click();
    cy.url().should('eq', homeURL);
  });
});
