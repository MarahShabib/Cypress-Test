
import { LoginPage } from '../support/pages/LoginPage'; // No `.js` or `.ts` extension


describe('National Geographic Login Scenarios', () => {
  let loginPage: LoginPage;


  beforeEach(() => {
    loginPage = new LoginPage();
    Cypress.on('uncaught:exception', () => false);
    cy.visit('https://www.nationalgeographic.com/');
      loginPage.openLogin();
  });

  it('should login successfully with an existing account', () => {

    loginPage.enterEmail('marah.shabib@hotmail.com');
    loginPage.clickNext();
    loginPage.enterPassword('marah456321');
    loginPage.verifyLoggedIn('Marah');
  
  });


  it('should create a new account when user does not exist', () => {

    loginPage.enterEmail('Peter.Sh66@hotmail.com');
    loginPage.clickNext();
    loginPage.registerNewUser('Petter','Jadei','432567Peter')
    loginPage.clickNext();
    loginPage.verifyLoggedIn('Petter');
  
  });

});