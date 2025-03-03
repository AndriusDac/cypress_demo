describe('TC12: Add Products in Cart', () => {

    beforeEach(() => {
        // root-level hook
        // runs before every test block
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        cy.visit("https://automationexercise.com");
    })

    it('TC12.01', () => {

        // Verify home page is loaded
        // cy.contains('body').should('contain', 'Automation Exercise');

        // Click on 'Products' button
        cy.contains('Products')
            .click();

        // Hover over first product and click 'Add to cart'
        cy.get('.product-overlay')
            .eq(0)
            .trigger('mouseover', { force: true })
            .find('[data-product-id]')
            .click({ force: true });

        // // Click 'Continue Shopping' button
        cy.contains('Continue Shopping')
            // .should("be.visible")
            .click();

        // // Hover over second product and click 'Add to cart'
        cy.get('.product-overlay')
            .eq(3)
            .trigger('mouseover', { force: true })
            .find('[data-product-id]')
            .click({ force: true });

        // // Click 'View Cart' button
        cy.contains('View Cart')
            .click();

        // // Verify both products are in cart
        cy.get("tr[id^='product-']")
            .should("have.length", 2);

        // // Verify prices, quantity and total price
        cy.get("tr[id='product-1']").within(() => {
            cy.get('.cart_price').should('contain', 'Rs. 500');
            cy.get('.cart_quantity button').should('have.text', '1');
            cy.get('.cart_total_price').should('contain', 'Rs. 500');
        });
        cy.get("tr[id='product-4']").within(() => {
            cy.get('.cart_price').should('contain', 'Rs. 1500');
            cy.get('.cart_quantity button').should('have.text', '1');
            cy.get('.cart_total_price').should('contain', 'Rs. 1500');
        });
    });
});

// Test Case 13: Verify Product quantity in Cart/

describe('TC13: Add Specific Quantity of Product to Cart', () => {
    beforeEach(() => {
        // root-level hook
        // runs before every test block
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        cy.visit("http://automationexercise.com");
    })

    it('should verify product quantity in cart', () => {
        // 1. Launch browser
        // Cypress automatiškai paleidžia naršyklę

        // 2. Navigate to url 'http://automationexercise.com'
        cy.visit('http://automationexercise.com');

        // 3. Verify that home page is visible successfully
        cy.url().should('eq', 'https://automationexercise.com/');
        cy.get('img[alt="Website for automation practice"]').should('be.visible');

        // 4. Click 'View Product' for any product on home page
        cy.get('.product-image-wrapper').first().find('a').contains('View Product').click();

        // 5. Verify product detail is opened
        cy.url().should('include', '/product_details/');
        cy.get('.product-information').should('be.visible');

        // 6. Increase quantity to 4
        cy.get('#quantity').clear().type('4');

        // 7. Click 'Add to cart' button
        cy.get('button').contains('Add to cart').click();

        // 8. Click 'View Cart' button
        cy.get('u').contains('View Cart').click();

        // 9. Verify that product is displayed in cart page with exact quantity
        cy.get('#cart_info_table').within(() => {
            cy.get('.cart_quantity').should('contain', '4');
        });
    });
});


// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'View Product' for any product on home page
// 5. Verify product detail is opened
// 6. Increase quantity to 4
// 7. Click 'Add to cart' button
// 8. Click 'View Cart' button
// 9. Verify that product is displayed in cart page with exact quantity