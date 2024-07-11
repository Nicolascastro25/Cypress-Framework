import {Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../../pageObjects/login/LoginPage';

const validateAlertMessage = (expectedMessage) => {
    cy.window().then((win) => {
        cy.stub(win, 'alert').as('alertStub');
    });
    cy.get('@alertStub').should('be.calledWith', expectedMessage);
};

Given('The user is on the login page', () => {
    cy.visit(Cypress.env('url'));
});

When('The user enters {string} in the username field', (username) => {
    loginPage.elements.emailInput().type(username);
});

When("The user clicks on 'Sign In with Google'", () => {
    loginPage.clickSignInWithGoogle();
    cy.url().should('include', '/user/dashboard');
});

And('The user enters {string} in the password field', (password) => {
    loginPage.elements.passwordInput().type(password);
});

And("The user clicks on 'Sign In'", () => {
    loginPage.clickSignIn();
});

Then('The user should be redirected to the dashboard page', () => {
    cy.url().should('include', '/user/dashboard');
});

Then('An error message should appear indicating that the password is incorrect', () => {
    validateAlertMessage('Password incorrect. Please try again');
});

Then('An error message should appear indicating that the user does not exist', () => {
    validateAlertMessage('The user does not exist. Please try again');
});

Then("The 'Sign In' button should be disabled", () => {
    loginPage.elements.signInButton().should('be.disabled');
});