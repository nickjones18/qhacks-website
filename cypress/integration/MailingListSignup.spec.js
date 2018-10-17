describe("Mailing List Signup", () => {
  beforeEach(() => {
    cy.visit("/#about");
  });

  it("has correct call to action text", () => {
    cy.get("[data-cy=mailing-list-cta").should(
      "contain",
      "Sign up for our mailing list to receive important QHacks announcements!"
    );
  });

  it("has the right placeholder in email input", () => {
    cy.get("[data-cy=mailing-list-input").should(
      "have.attr",
      "placeholder",
      "Enter your email address"
    );
  });

  it("updates text when typing in email input", () => {
    cy.get("[data-cy=mailing-list-input")
      .type("test@test.com")
      .should("have.value", "test@test.com");
  });

  it("succesfully adds someone to the mailing list", () => {
    cy.get("[data-cy=mailing-list-input]").type("test@test.com");
    cy.get("[data-cy=mailing-list-signup-button]").click();

    // test for the success message
    // need to figure out how to handle test db
    // potentially stub but hitting a real server is true E2E testing
  });

  // continue to test other states:
  // failure from server
  // email already exists
  // invalid email
  // has double click protection
});
