class Login 
{
   txtUserName = "input[type='email']";
   textPassword = "input[type='password']";
   loginBtn = "button[type='submit']";
   lbMsg = ".main-title";
   invalidPasswordMsg = "div[class='mat-mdc-snack-bar-label mdc-snackbar_label']"

   setUserName(username)
   {
      cy.get(this.txtUserName).type(username);
   }

   setPassword(password)
   {
     cy.get(this.textPassword).type(password); 
   }

   clickLoginBtn()
   {
     cy.get(this.loginBtn, { timeout: 10000 }).click();
   }

   verifyLogin()
   {
    
     cy.get(this.lbMsg).should('contain','Live Tasks 0')
   }

   verifyInvalidPassword()
   {
    cy.wait(1000);
    cy.on('window:alert', (text) => {
        expect(text).to.contains('Invalid credentials');
      });
    //cy.get(this.invalidPasswordMsg, { timeout: 10000 }).should('have.text','Invalid credentials');
   }

}

export default Login