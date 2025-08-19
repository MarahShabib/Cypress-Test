export class LoginPage{
    //  constructor() {
        
    // }
    private loginPage_iframeSelector = 'iframe#oneid-iframe';
    private loginPage_emailSelector = 'input[type="email"]';
    private loginPage_clickButtonSelector = '#BtnSubmit';
    private loginPage_passwordSelector = 'input[type="password"]';
    private loginPage_inputFirstNameSelector = '#InputFirstName';
    private loginPage_inputLastNameSelector = '#InputLastName';
    private loginPage_passwordNewSelector = '#password-new';

    getIframeBody() {
    return cy
      .get(this.loginPage_iframeSelector)
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap);
  }

    openLogin() {
    cy.get('.NavBar__Toggle').click();
    cy.contains('LOG IN').click();
  }

    enterEmail(email: string) {
    this.getIframeBody()
      .find(this.loginPage_emailSelector)
      .should('be.visible')
      .type(email);
  }

    clickNext() {
    this.getIframeBody()
      .find(this.loginPage_clickButtonSelector)
      .should('be.visible')
      .click();
  }

    enterPassword(password: string) {
    this.getIframeBody()
      .find(this.loginPage_passwordSelector)
      .should('be.visible')
      .type(`${password}{enter}`);
  }

    registerNewUser(firstName: string, lastName: string, password: string) {
    this.getIframeBody().find(this.loginPage_inputFirstNameSelector).should('be.visible').type(firstName);
    this.getIframeBody().find(this.loginPage_inputLastNameSelector).should('be.visible').type(lastName);
    this.getIframeBody().find(this.loginPage_passwordNewSelector).should('be.visible').type(password);
    this.getIframeBody().find(this.loginPage_clickButtonSelector).should('be.visible').click();
  }

  verifyLoggedIn(name: string) {
    cy.contains('MY ACCOUNT').click();
    cy.contains(`Hi, ${name}!`).should('exist');
  }




}