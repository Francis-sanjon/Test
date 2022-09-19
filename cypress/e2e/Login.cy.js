const { Given, When } = require("@badeball/cypress-cucumber-preprocessor")


describe('empty spec', () => {
  Given('User login OrangeHRM page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })
  When('User enters the valid username and password',()=>{
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
  })

        })