it("opening the page should present the scene1", () => {
  cy.visit("/");

  cy.get("#scene1").should("exist");
});
it("Should be able to play the game until the end", () => {
  cy.visit("/");

  cy.get("#scene1").should("exist");
  cy.get(".paper").click();

  cy.get("#scene2").should("exist");
  cy.contains("HOUSE IS PICKING").should("exist");
  cy.get(".skeleton").should("not.exist");
  cy.get("#scene3").should("exist");

  cy.get("[data-cy=game-result]").then((p) => {
    const resultTxt = p.text();
    cy.contains("PLAY AGAIN").click();
    cy.get("[data-cy=matches-info]").should("contain.text", "1");

    if (resultTxt === "YOU WIN") {
      cy.get("[data-cy=score-info]").should("contain.text", "1");
    } else {
      cy.get("[data-cy=score-info]").should("contain.text", "0");
    }
  });
});
