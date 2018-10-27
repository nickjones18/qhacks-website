describe("Landing", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has QHacks crown", () => {
    cy.get("[data-cy=qhacks-crown]").should("be.visible");
  });

  it("has QHacks wordmark", () => {
    cy.get("[data-cy=qhacks-wordmark]").should("be.visible");
  });

  it("has the MLH banner", () => {
    cy.get("[data-cy=mlh-banner").should("be.visible");
  });

  it("has university name", () => {
    // TODO: Log issue about lack of support for apostrophe
    cy.get("[data-cy=qhacks-information").should("contain", "University");
  });

  it("has date of event", () => {
    cy.get("[data-cy=qhacks-information").should(
      "contain",
      "February 1-3, 2019"
    );
  });

  it("has QHacks tagline", () => {
    // TODO: Same apostrophe issue here
    cy.get("[data-cy=qhacks-tagline]").should(
      "contain",
      "Join us for an unforgettable experience."
    );
  });

  it("has a login button that links to the QHacks Dashboard", () => {
    cy.get("[data-cy=login-button]").then(($btn) => {
      expect($btn.text()).to.equal("Login");

      $btn.click();
      // TODO: When Login button gets a link uncomment this
      // cy.url().should('contain', 'https://app.qhacks.io/');
    });
  });
});
