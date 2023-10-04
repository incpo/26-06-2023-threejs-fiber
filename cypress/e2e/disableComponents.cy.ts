describe("Visit start page", () => {
  it("Visit", () => {
    cy.visit("/");
    cy.contains("Components").click();
    cy.findByLabelText("");
  });
});
