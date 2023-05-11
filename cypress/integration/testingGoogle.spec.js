context("testing lighthouse report in cypress", () => {
  it("Visit google", () => {
    cy.visit("https://www.google.com");
    // cy.get("div > span").should("contain", "Byju`s");
  });
});
