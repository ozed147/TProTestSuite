import Login from "../pageObjects/LoginPage.js"
import Dashboard from "../pageObjects/DashboardPage.js"
import EditAccount from "../pageObjects/EditAccountPage.js"


describe('MyTProTests',()=>{

    before('Lunch app', ()=>{
       cy.request({url:'https://app.tpro.rocks/authenticate', timeout: 120000,
       retryOnStatusCodeFailure: true}).visit('https://app.tpro.rocks/authenticate')
    })

    const ln = new Login ();
    const db = new Dashboard();
    const ea = new EditAccount();

    it('LoginTest', ()=>{

        cy.fixture("tpro").then((data)=>{

            //Data Testing -- Two different passwords are run twice with this script
            data.forEach((userdata)=>{

                ln.setUserName(userdata.username);
                ln.setPassword(userdata.password);
                ln.clickLoginBtn();
               
                    //login validation
                    ln.verifyLogin();
                    // Change the password to the new one or change it back to the old one
                    db.clickMenuBtn();
                    db.clickEditAccount();
                    ea.clickPasswordTab();
                    ea.setCurrentPassword(userdata.password);
                    ea.setNewPassword(userdata.newpassword);
                    ea.setVerifyPassword(userdata.newpassword);
                    ea.clickUpdateBtn();

                    // logout
                    db.clickMenuBtn();
                    db.clickLogout();


            })   
            
        })


    })
    
    it('InvalidPasswordLoginTest', ()=>{

        
            cy.fixture('tpro2').then((data2)=>{
            
                //cy.wait(5000);
                ln.setUserName(data2.username);
                //invalid password
                ln.setPassword(data2.password);
                ln.clickLoginBtn();
                // Validation of invalid password
                ln.verifyInvalidPassword();

            })

    })

   
    })


