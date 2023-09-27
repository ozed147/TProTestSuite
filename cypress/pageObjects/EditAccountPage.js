class EditAccount
{
    tabPassword = "mat-list-item:nth-child(3) span:nth-child(1) span:nth-child(1) mat-label:nth-child(1)";
    txtCurrentPassword = "input[formcontrolname='current_password']";
    txtNewPassword = "input[formcontrolname='new_password']";
    txtVerifyPassword = "input[formcontrolname='verify_password']";
    updateBtn = "button[class='w-48 font-normal h-11 uppercase mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-accent mat-mdc-button-base'] span[class='mdc-button__label']"


    

     clickPasswordTab()
     {
        
        cy.get(this.tabPassword).click();
        cy.wait(1000);
     }

     setCurrentPassword(currentPassword)
     {
        cy.get(this.txtCurrentPassword).type(currentPassword);
     }

     setNewPassword(newPassword)
     {
        cy.get(this.txtNewPassword).type(newPassword);
     }

     setVerifyPassword(verifyPassword)
     {
        cy.get(this.txtVerifyPassword).type(verifyPassword);
     }

     clickUpdateBtn()
   {
     cy.get(this.updateBtn).eq(0).click({force:true});
   }
}

export default EditAccount