import SceneRenderer from "../SceneRenderer";

describe("SceneRenderer Component", () => {
  it("renders the initial scene correctly", () => {
    cy.mount(<SceneRenderer />);

    // Assert that the initial scene (Scene1) is rendered
    cy.get("#scene1").should("be.visible");
  });

  it("transitions to Scene2 when player selects a move", () => {
    cy.mount(<SceneRenderer />);

    // Click on a move in Scene1
    cy.get(".paper").click();

    // Assert that Scene2 is rendered
    cy.get("#scene2").should("be.visible");
  });

  it("transitions to Scene3 and displays result when both player and house moves are set", () => {
    cy.mount(<SceneRenderer />);

    // Set player move
    cy.get(".paper").click();

    cy.contains("HOUSE IS PICKING").should("not.exist");

    // Assert that Scene3 is rendered
    cy.get("#scene3").should("be.visible");
  });

  it("resets moves when transitioning to the next scene", () => {
    cy.mount(<SceneRenderer />);

    // Set player move
    cy.get(".paper").click();

    cy.contains("HOUSE IS PICKING").should("not.exist");

    // Assert that Scene3 is rendered
    cy.get("#scene3").should("be.visible");
    cy.contains("PLAY AGAIN").click();

     // Assert that Scene3 is rendered
     cy.get("#scene1").should("be.visible");
  });
});
