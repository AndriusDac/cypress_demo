describe('TC12: Add Products in Cart', () => {

    beforeEach(() => {
        // Prieš kiekvieną testą atidarome svetainę
        cy.visit('https://automationexercise.com');
    });


    it('TC12.1_Verifies that the home page is visible', () => {
        cy.get('body').should('be.visible');
    });


    it('TC12.2_Navigates to the Products page', () => {
        cy.contains('Products').click();
        cy.url().should('include', '/products');
    });

    //TESTAS PASSINA, BET PREKĖS NEPRIDEDA PREKIŲ Į KREPŠELĮ
    it('TC12.3_Adds the first product to the cart', () => {
        cy.contains('Products').click();
        // Užtikriname, kad produktas matomas
        cy.get('.product-overlay').first().scrollIntoView().should('be.visible');
        // Bandome užvesti pelę ir pridėti į krepšelį
        cy.get('.product-overlay').first().trigger('mouseover', { force: true });
        cy.contains('Add to cart').click();
        cy.contains('Continue Shopping').click();
    });

    //TESTAS PASSINA, BET PREKĖS NEPRIDEDA PREKIŲ Į KREPŠELĮ
    it('TC12.4_Adds the second product to the cart', () => {
        cy.contains('Products').click();
        // Užtikriname, kad produktas matomas
        cy.get('.product-overlay').eq(1).scrollIntoView().should('be.visible');
        // Bandome užvesti pelę ir pridėti į krepšelį
        cy.get('.product-overlay').eq(1).trigger('mouseover', { force: true });
        cy.contains('Add to cart').click();
    });


    it('TC12.5_Views the cart', () => {
        cy.contains('Cart').click();
        cy.url().should('include', '/view_cart');
    });

    //NEVEIKI, NES NEPRIDEDA PREKIŲ Į KREPŠELĮ
    it('TC12.6_Verifies both products are in the cart', () => {
        cy.contains('Cart').click();
        // Palaukti, kol produktai bus pridėti į krepšelį
        cy.get('.cart_description', { timeout: 6000 }).should('have.length.at.least', 1);
        // Patikriname, ar yra bent 2 produktai
        cy.get('.cart_description').should('have.length', 2);
    });

    //NEVEIKIE, 
    it('TC12.7_Verifies prices, quantity, and total price', () => {
        cy.contains('Cart').click();
        cy.get('.cart_price').should('exist');
        cy.get('.cart_quantity').should('exist');
        cy.get('.cart_total_price').should('exist');
    });

});
