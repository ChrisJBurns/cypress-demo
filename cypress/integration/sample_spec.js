describe('My first test', () => {
    it('It does not do much', () => {
        cy.visit('https://vehicleenquiry.service.gov.uk/');

        cy.get('#wizard_vehicle_enquiry_capture_vrn_vrn')
            .type('WN66ZKC')
            .should('have.value', 'WN66ZKC');

        cy.get('#submit_vrn_button').click();
        cy.get('#yes-vehicle-confirm').click();
        cy.get('#capture_confirm_button').click();
        cy.get('.reg-mark').should('have.value', 'WN66 ZKC');
    })
})