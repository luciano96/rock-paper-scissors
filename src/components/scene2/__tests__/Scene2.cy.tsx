import Scene2 from "../Scene2";

describe("<Scene2 />", () => {
  it("should render correctly", () => {
    const getNextSceneStub = cy.stub().as("getNextSceneStub");
    const setHouseMove = cy.stub().as("setHouseMove");
    cy.mount(
      <Scene2
        getNextScene={getNextSceneStub}
        gameKey="paper"
        setHouseMove={setHouseMove}
      />
    );
    cy.get("#scene2").should("exist");
    cy.get(".paper").should("exist");
    cy.contains("HOUSE IS PICKING").should("exist");
    cy.contains("THE HOUSE PICKED").should("be.visible");
    cy.wrap(setHouseMove).should("be.called");
  });
});
