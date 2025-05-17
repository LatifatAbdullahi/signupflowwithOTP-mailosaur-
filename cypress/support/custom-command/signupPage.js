let signup



before(()=>{
    cy.fixture('elements').then(sel=>{
        signup = sel.elements.signupPage
        
})
})
Cypress.Commands.add('typeInFullname', ()=>{
 cy.get(signup.fullnameField).type('Beatrice Vivian Olasupo')
})
Cypress.Commands.add('businessNameField',()=>{
    cy.get(signup.businessNameField).type('My business name')
   })
   Cypress.Commands.add('typeInBusinessPhoneNumber', ()=>{
    cy.get(signup.businessPhoneField).type('+2348100154219')
   })
   

 Cypress.Commands.add('typeInBusinessEmail',()=>{
    cy.get(signup.businessEmailField).type('abdullahilatifat63+testingg@gmail.com')
   })

 Cypress.Commands.add('typeInBusinessRegNum', ()=>{
    cy.get(signup.businessRegNumField).type('RC-123345')
   })
   Cypress.Commands.add('clickNextButton', ()=> {
    cy.get('button').contains('Next').click()
   })


   
   
