import type { GameResultType } from "~/hooks/useGameResultCalculator";
import Scene3 from "../Scene3";

describe("<Scene3 />", () => {
  it("should render correctly", () => {
    const getNextSceneStub = cy.stub().as("getNextSceneStub");
    const resetMoves = cy.stub().as("resetMoves");
    cy.mount(
      <Scene3
        getNextScene={getNextSceneStub}
        houseMove="paper"
        playerMove="paper"
        resetMoves={resetMoves}
        result="TIE"
      />
    );

    cy.get("#scene3").should("exist");
  });

  (
    [
      { value: "TIE", desc: "tie" },
      { value: "YOU LOSE", desc: "lose" },
      { value: "YOU WIN", desc: "win" },
    ] as {
      value: GameResultType;
      desc: "tie" | "win" | "lose";
    }[]
  ).forEach(({ value, desc }) => {
    return it(`should render ${value} if the game ends in a ${desc}`, () => {
      const getNextSceneStub = cy.stub().as("getNextSceneStub");
      const resetMoves = cy.stub().as("resetMoves");
      cy.mount(
        <Scene3
          getNextScene={getNextSceneStub}
          houseMove="paper"
          playerMove="paper"
          resetMoves={resetMoves}
          result={value}
        />
      );

      cy.contains(value).should("exist");
    });
  });

  it("should call resetMoves and getNextScene when clicking 'PLAY AGAIN'", () => {
    const getNextSceneStub = cy.stub().as("getNextScene");
    const resetMovesStub = cy.stub().as("resetMoves");
    cy.mount(
      <Scene3
        getNextScene={getNextSceneStub}
        houseMove="paper"
        playerMove="paper"
        resetMoves={resetMovesStub}
        result="TIE"
      />
    );

    cy.get("#scene3").should("exist");
    cy.contains("PLAY AGAIN")
      .should("exist")
      .click()
      .then(() => {
        expect(getNextSceneStub).to.be.called;
        expect(resetMovesStub).to.be.called;
      });
  });
});
