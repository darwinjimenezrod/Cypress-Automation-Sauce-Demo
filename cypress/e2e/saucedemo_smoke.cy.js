describe('Sauce Demo - easy smoke flow', () => {

beforeEach (() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

}),
  it('logs in successfully', () => {


    cy.contains('Products').should('be.visible')
  }),

  it('verifies products page is visible', () => {
    cy.contains('Products').should('be.visible')
  }),

  it('adds the first product to cart', () => {
    cy.contains('Add to cart').first().click()

    // Cart badge should show 1
    cy.get('.shopping_cart_badge')
      .should('exist')
      .and('contain.text', '1')
  }),

  it('opens cart and removes the item', () => {
    cy.contains('Add to cart').first().click()
    // Open cart
    cy.get('.shopping_cart_link').click()

    // Remove item
    cy.contains('Remove').click()

    // Cart badge should disappear
    cy.get('.shopping_cart_badge').should('not.exist')
  }),

  it('logs out successfully', () => {
    // Open menu
    cy.get('#react-burger-menu-btn').click()

    // Logout
    cy.get('#logout_sidebar_link').click()

    // Verify back on login page
    cy.get('[data-test="login-button"]').should('be.visible')
  })

})