import PlayerMove from "../PlayerMove";

describe("PlayerMove Component", () => {
  it("should render 'YOU PICKED' for the key selected", () => {
    cy.mount(<PlayerMove gameKey="paper" />);
    cy.get("p").should("contains.text", "YOU PICKED");
    cy.get(".paper").should("exist");
  });
});
