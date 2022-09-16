const { Given } = require("@badeball/cypress-cucumber-preprocessor")


describe('empty spec', () => {
  Given('User login OrangeHRM page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

        })