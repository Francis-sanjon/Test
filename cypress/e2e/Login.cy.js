const { Given, When } = require("@badeball/cypress-cucumber-preprocessor")


describe('empty spec', () => {
  Given('User login OrangeHRM page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })
  When('User enters the valid username and password',()=>{
    
  })

        })