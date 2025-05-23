let homepage
let signup
let email
let emailAddress
let serverID = '0t9a2d8f'
let emailDomain = '@0t9a2d8f.mailosaur.net'
import {fakerEN_NG as faker } from "@faker-js/faker"


before(()=>{
    const checker = new Date().getTime()
    const emailSuffix = checker.toString().substring(6,13)
    const emailPrefix = `test${emailSuffix}`
    emailAddress = `${emailPrefix}${emailDomain}`
    const userDetails = {
    emailAddress: emailAddress
   }
   cy.writeFile('cypress/fixtures/creds.json', JSON.stringify(userDetails, null, 2))

   cy.fixture('elements').then(sel=>{
        homepage = sel.elements.homepage
        signup = sel.elements.signupPage

    })
   
    cy.fixture('creds').then((cred)=>{
        email = cred
    })

})

Cypress.Commands.add('typeInAnyValue', (field, text) =>{
    cy.get(field).type(text)
   })
   Cypress.Commands.add('clickAnyButtonwithText',(text) =>{
    cy.get('button').contains(text).click()
   })
   Cypress.Commands.add('clickAnyLinkWithText',  (text) => {
    cy.get('a').contains(text).click()
       
    })

   Cypress.Commands.add('clickHowYouHeardAboutUsDropdown',  (text) => {
     cy.get(signup.howYouHeardAboutUs).click()
     cy.get('#scrollableDiv').contains(text).click()
        
     })
     Cypress.Commands.add('typeInBasicDetailsAndRegNumber', ()=>{
        const inputs =  [
            faker.person.fullName(),
            faker.company.buzzNoun(),
            email.emailAddress,
            faker.phone.number({style: 'international'}) ,
            faker.string.numeric({length: {min:5, max:7}})
        ]

        cy.get('input').each(($el, index)=>{
            cy.wrap($el).fill(inputs[index])
        })

        cy.clickAnyButtonwithText('Next')
     //cy.clickNextButton()
    })
     

    Cypress.Commands.add('typeInBasicDetails', ()=>{
       cy.typeInAnyValue(signup.fullnameField, faker.person.fullName()) 
       cy.typeInAnyValue(signup.businessNameField, faker.company.buzzNoun())
       cy.typeInAnyValue(signup.businessEmailField, email.emailAddress)
       cy.typeInAnyValue(signup.businessPhoneField, faker.phone.number({style: 'international'}))
   
    })

     Cypress.Commands.add('chooseAnyOptionalField', ()=>{
       cy.get(signup.instagramField).faker.person.buzzNoun()
          
    })

    Cypress.Commands.add('typeInPassword',  ()=>{
        cy.get(signup.passwordField).type('Quiinnxee40&')
    })

    Cypress.Commands.add('submitSignUp',  ()=>{
        cy.clickAnyButtonwithText('Sign Up')
    })
 Cypress.Commands.add('retrieveAndInsertOTP', ()=>{
    cy.mailosaurGetMessage(serverID, {sentTo: emailAddress})
    .then((email)=>{
      const firstCode = email.html.codes[0]
      const otp = firstCode.value
      cy.log(firstCode)
      cy.log(otp)
      cy.get('input').each(($el, index)=>{
        cy.wrap($el).type(otp[index])
      })
    })
})

Cypress.Commands.add('fillinAnyOptionalField', (option)=>{
if (option === 'business registeration'){
    cy.typeInAnyValue(signup.businessRegNumField, '6543526')
    cy.clickAnyButtonwithText('Next')
}
else if (option === 'website'){
    cy.clickAnyButtonwithText('Next')
    cy.typeInAnyValue(signup.websiteField, faker.internet.domainName())
} else if (option === 'instagram'){
     cy.clickAnyButtonwithText('Next')
    cy.typeInAnyValue(signup.instagramField, faker.company.buzzNoun())
}
else if (option === 'twitter'){
     cy.clickAnyButtonwithText('Next')
    cy.typeInAnyValue(signup.twitterField, faker.company.buzzNoun())
}
else  {
 throw  new Error("option not available");
}

})
  

