/// <reference types="cypress" />

describe("calculator app", () => {
  beforeEach(() => {
    cy.visit("https://gallant-bohr-809cd9.netlify.app/");
  });

  it("displays selected operands", () => {
    cy.get("button").contains("1").click();
    cy.get("h1").contains("1");
    cy.get("button").contains("+").click();
    cy.get("button").contains("2").click();
    cy.get("h1").contains("2");
  });

  it("performs basic arithmetic", () => {
    cy.get("button").contains("1").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("=").click();
    cy.get("h1").contains("2");
  });

  it("performs arithmetic for negative values", () => {
    cy.get("button").contains("±").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("=").click();
    cy.get("h1").contains("0");
  });

  it("performs arithmetic for percentages", () => {
    cy.get("button").contains("1").click();
    cy.get("button").contains("*").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("%").click();
    cy.get("button").contains("=").click();
    cy.get("h1").contains("0.1");
  });

  it("chains calculations", () => {
    cy.get("button").contains("1").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("+").click();
    cy.get("h1").contains("2");
    cy.get("button").contains("2").click();
    cy.get("button").contains("=").click();
    cy.get("h1").contains("4");
  });

  it("calculates using the last operator selected", () => {
    cy.get("button").contains("1").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("-").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("=").click();
    cy.get("h1").contains("0");
  });

  it("'clear' button resets display and math expression", () => {
    cy.get("button").contains("1").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("1").click();
    cy.get("h1").contains("1");
    cy.get("button").contains("c").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("=").click();
    cy.get("h1").contains("4");
  });
});
