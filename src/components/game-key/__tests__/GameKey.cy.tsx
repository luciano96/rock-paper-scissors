import GameKey from "../GameKey";
import type { MoveType } from "../GameKey.types";

describe("GameKey Component", () => {
  (["rock", "paper", "scissors"] as MoveType[]).forEach((moveKey) =>
    it(`should call onClick handler when clicked with ${moveKey}`, () => {
      const onClick = cy.stub().as("onClick");

      cy.mount(<GameKey moveKey={moveKey} onClick={onClick} />);

      cy.get("button")
        .should("have.class", "gamekey")
        .should("have.class", `${moveKey}`)
        .click()
        .then(() => {
          expect(onClick).to.be.calledWith(moveKey);
        });
    })
  );
});
