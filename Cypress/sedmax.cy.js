describe('test sedmax', () => {
    beforeEach(() => {
      cy.visit('https://demo.sedmax.ru/sedmax/web/ui/login')
    })
  
    it('.type() - type into a DOM element', () => {
      cy.get("input[placeholder=\"Пользователь\"]").type("testUser")
      cy.get('.ant-login-input-password').type('testPassword')
      cy.get('[data-testid="submit_button"]').click()
    })
  })
  