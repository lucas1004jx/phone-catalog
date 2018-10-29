describe('Enter the main page',()=>{
    it("Visite the phone catalog page",()=>{
        cy.visit('http://localhost:3000');
        // test click logo icon
        cy.get('.logo[alt="apple"]').click().get('.phones-container').find('div[data-id]').should('have.attr','data-id').and('match',/^apple/);
        cy.get('.logo[alt="samsung"]').click().get('.phones-container').find('div[data-id]').should('have.attr','data-id').and('match',/^samsung/);
        cy.get('.logo[alt="huawei"]').click().get('.phones-container').find('div[data-id]').should('have.attr','data-id').and('match',/^huawei/);
        cy.get('.logo[alt="xiaomi"]').click().get('.phones-container').find('div[data-id]').should('have.attr','data-id').and('match',/^xiaomi/);
        

        //test click menu icon
        cy.get('.navbar').contains('mobile').click().get('.phones-container').find('div[data-product]').should('have.attr','data-product').and('match',/mobile/);
        cy.get('.navbar').contains('tablet').click().get('.phones-container').find('div[data-product]').should('have.attr','data-product').and('match',/tablet/);
        cy.get('.navbar').contains('watch').click().get('.phones-container').find('div[data-product]').should('have.attr','data-product').and('match',/watch/);

        //click select button
        cy.get('.phone button').click().get('.detail-container').should('be.visible');

        //click close button
        cy.get('.detail-container .detail button').click().get('.detail-container').should('not.be.visible');
        
    })
})