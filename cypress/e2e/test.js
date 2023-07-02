///<reference types ="Cypress"/>
describe('test login', () => {
    it('test login', () => {
        cy.visit("https://automationteststore.com/")
        // cy.get('img[src="//automationteststore.com/image/thumbnails/18/6f/demo_product03_jpg-100094-250x250.jpg"]').click()
        // cy.get('a[href="https://automationteststore.com/index.php?rt=product/product&product_id=53"]').click()
        // cy.get('a[title="Flash Bronzer Body Gel"]').click()

        // the contact us :
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.get('input#ContactUsFrm_first_name').type("meso") //or without 'input' is correct 
        // cy.get('#ContactUsFrm_email').type("maisa@gimal.com") 
        // OR..
        cy.get("input[id='ContactUsFrm_email']").type("m@gmail")
        cy.get('textarea[name="enquiry"]').type("this is a test")
        cy.get('button[title="Submit"]').click()
        // or using multiple classes :
        // cy.get('[class="btn btn-primary lock-on-click"]').click()
        //or by 2 defferent attributes :
        // cy.get('button[title="Submit"][class="btn btn-primary lock-on-click"]').click()




        // now bdi a3ml assertion ll msg 'successflly' + i will use "it.only"
        // // it.only('test the message', () => {
        //     cy.visit("https://automationteststore.com/")
        //     cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        //     cy.get('input#ContactUsFrm_first_name').type("meso")
        //     cy.get("input[id='ContactUsFrm_email']").type("m@gmail")
        //     cy.get('textarea[name="enquiry"]').type("this is a test")
        //     cy.get('button[title="Submit"]').click()
            
            cy.get('.mb40 > :nth-child(3)').should('have.text',"Your enquiry has been successfully sent to the store owner!")
            cy.document().should("have.property","title").and("eq","Contact Us")
            cy.title().should("include","Us");
            cy.title().should("eq","Contact Us");
            cy.location('href').should("include","contact");
            cy.location().its('href').should('include',"contact");
            cy.url().should('include',"contact")
            cy.get('a[title="Continue"]').click()
            


            // console.log("4 test passed")
            // let a=10
            // let b=20
            // let myname = "meso"
            // console.log(a*b)

            // console.log(myname)

                        // promise part :
                        //  هون رح نظيف عناصر ونرجع  ع الصفحة الرئيسة ونظيف كمان عنصر ونرجع عالهوم


            cy.get('.prdocutname').contains('Benefit Bella Bamba').click().then(function(element){

                console.log(element.text()+" has been added")
                cy.log(element.text()+" has been added ")
            })
            cy.go('back')

            cy.get('.prdocutname').contains('Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF').click().then(function(element){

                console.log(element.text()+" has been added")
            })
            cy.go('back')










             

            
        });

        
    });
// });



