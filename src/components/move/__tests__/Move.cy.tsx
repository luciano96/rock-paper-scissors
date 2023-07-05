import Move from "../Move";

describe("<Move />", () => {
  it("should render correctly", () => {
    cy.mount(
      <Move text="DummyText">
        <span>Hey</span>
      </Move>
    );
    cy.get("p").should("contains.text", "DummyText");
    cy.contains("Hey").should("exist");
  });

  it("should render animation spans if isWin is true", () => {
    cy.mount(
      <Move text="DummyText" isWin>
        <p>Hey</p>
      </Move>
    );
    cy.get("span").should("have.length", 3).should("have.class", "ripple-span");
  });

  it("should not render animation spans if isWin is false", () => {
    cy.mount(
      <Move text="DummyText" isWin={false}>
        <p>Hey</p>
      </Move>
    );
    cy.get(".ripple-span").should("not.exist");
  });
});
