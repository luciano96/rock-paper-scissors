import HouseMove from "../HouseMove";

describe("HouseMove Component", () => {
  it("should render 'House is Picking' if no gameKey provided", () => {
    cy.mount(<HouseMove gameKey={null} />);
    cy.get("p").should("contains.text", "HOUSE IS PICKING");
    cy.get(".skeleton").should("exist");
  });

  it("should render 'THE HOUSE PICKED' if no gameKey provided", () => {
    cy.mount(<HouseMove gameKey="scissors" />);
    cy.get("p").should("contains.text", "THE HOUSE PICKED");
    cy.get(".scissors").should("exist");
  });
});
