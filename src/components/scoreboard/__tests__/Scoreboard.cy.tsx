import Scoreboard from "../ScoreBoard";
import ScoreContextProvider from "~/contexts/score";

describe("<Scoreboard />", () => {
  beforeEach(() => {
    cy.intercept("_next/static/media/*", {
      fixture: "images/logo.svg",
    });
  });

  it("should render correctly", () => {
    cy.mount(<Scoreboard />);
    cy.get("[data-cy=score-message]").should("contains.text", "SCORE");
    cy.get("[data-cy=score-info]").should("contains.text", "0");
    cy.get("[data-cy=matches-message]").should("contains.text", "MATCHES");
    cy.get("[data-cy=matches-info]").should("contains.text", "0");
  });

  it("should render context values correctly", () => {
    const initialState = { score: 5, totalMatches: 5 };
    cy.mount(
      <ScoreContextProvider value={initialState}>
        <Scoreboard />
      </ScoreContextProvider>
    );
    cy.get("[data-cy=score-info]").should("contains.text", initialState.score);
    cy.get("[data-cy=matches-info]").should(
      "contains.text",
      initialState.totalMatches
    );
  });
});
