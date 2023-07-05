import type { MoveType } from "~/components/game-key/GameKey.types";
import Scene1 from "../Scene1";

describe("<Scene1 />", () => {
  it("should render correctly", () => {
    const getNextSceneStub = cy.stub().as("getNextSceneStub");
    cy.mount(<Scene1 getNextScene={getNextSceneStub} />);
    cy.get("#scene1").should("exist");
    cy.get(".paper").should("exist");
    cy.get(".rock").should("exist");
    cy.get(".scissors").should("exist");
  });

  (["paper", "scissors", "rock"] as MoveType[]).forEach((moveKey) =>
    it(`should call next scene with ${moveKey} chosen`, () => {
      const getNextSceneStub = cy.stub().as("getNextSceneStub");
      const setPlayerMove = cy.stub().as("setPlayerMove");
      cy.mount(
        <Scene1 getNextScene={getNextSceneStub} setPlayerMove={setPlayerMove} />
      );
      cy.get("#scene1").should("exist");
      cy.get(`.${moveKey}`)
        .should("exist")
        .click()
        .then(() => {
          expect(getNextSceneStub).to.be.called;
          expect(setPlayerMove).to.be.calledWith(moveKey);
        });
    })
  );
});
