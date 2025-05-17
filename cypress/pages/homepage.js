class HomePage{


    get_login_button(){
        return cy.get('.Header2_nav_btn_wRKfY>div:nth-child(1)>button')

    }
    get_signup_button(){
        return cy.get('.Header2_nav_btn_wRKfY>div:nth-child(2)>button')
        
    }
    click_login_button(){
        this.get_login_button.click()
    }
    click_signup_button(){
        this.get_signup_button.click()
    }

}