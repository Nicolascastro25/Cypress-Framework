import Page from '../Page';

class LoginPage extends Page {
  elements = {
    emailInput: () => cy.get('#email'),
    passwordInput: () => cy.get('#password'),
    signInButton: () => cy.get("button[type='submit']"),
    signInWithGoogleButton: () => cy.get("button[type='button']"),
  };

  clickSignIn() {
    super.dblClickElement(this.elements.signInButton());
  }

  clickSignInWithGoogle() {
    super.dblClickElement(this.elements.signInWithGoogleButton());
  }

}

export default new LoginPage();