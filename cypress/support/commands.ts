/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('getDataTestId', dataTestSelector => {
    cy.get(`[data-testId="${dataTestSelector}"]`);
});

Cypress.Commands.add('login', ({ username = Cypress.env('username'), password = Cypress.env('password') } = {}) => {
    cy.session([username, password], () => {
        cy.visit('/login');
        cy.get('[data-cy=legacy-auth-login-button]').click();
        if (!(Cypress.env('mode') === 'dev')) {
            cy.origin(
                Cypress.env('auth_url'),
                {
                    args: {
                        usr: username,
                        pwd: password,
                    },
                },
                ({ usr, pwd }) => {
                    cy.get('#username').type(usr);
                    cy.get('#password').type(pwd);
                    cy.get('button').click();
                }
            );
        } else {
            cy.get('#username').type(Cypress.env('username'));
            cy.get('#password').type(Cypress.env('password'));
            cy.get('button').click();
        }
        cy.location('pathname').should('eq', '/dashboard');
    });
});
