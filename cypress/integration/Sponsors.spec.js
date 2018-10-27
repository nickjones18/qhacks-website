describe("Sponsors", () => {
  beforeEach(() => {
    cy.visit("/#sponsors");
  });

  it("should have a prompt for new potential partners", () => {
    cy.get("[data-cy=partners-email-prompt]")
      .should("have.text", "partnership@qhacks.io")
      .should("have.attr", "href", "mailto:partnership@qhacks.io");
  });

  describe("Links", () => {
    it("should contain the proper number of sponsors", () => {
      cy.get("[data-cy=sponsor-link]").should("have.length", 16);
    });

    it("should contain the proper urls", () => {
      const sponsorURLs = [
        "https://tucows.com",
        "https://kingsds.network",
        "https://sunlife.ca",
        "https://consensys.net/",
        "https://td.ca",
        "https://ratehub.ca",
        "https://scotiabank.ca",
        "https://loopio.com",
        "https://balsamiq.com",
        "https://wolfram.com/language/",
        "https://ritual.co",
        "https://wake-ups.com",
        "https://sketchapp.com",
        "https://www.launchacademy.ca/",
        "https://queensu.ca/innovationcentre/",
        "https://smith.queensu.ca/grad_studies/mei/"
      ];

      cy.get("[data-cy=sponsor-link]").each(($el, index, $list) => {
        expect($el).to.have.attr("href", sponsorURLs[index]);
      });
    });
  });

  describe("Images", () => {
    it("should be diplayed correctly", () => {
      cy.get("[data-cy=test-sponsor-image]")
        .invoke("show")
        .trigger("mouseover")
        .should("have.css", "padding", "20px");
    });
  });
});
