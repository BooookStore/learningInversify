import { container } from "../src/inversify.config";
import { TYPES } from "../src/types";
import { Warrior } from "../src/interfaces";
import { Ninja } from "../src/entities";

import { expect } from "chai";
import "mocha";

describe("Container API", () => {
  it("get instance from container", () => {
    // Execute
    const warrior = container.get<Warrior>(TYPES.Warrior);

    // Verify
    expect(warrior.fight()).to.be.eql("cut!");
    expect(warrior.snake()).to.be.eql("hit!");
  });
  it("use container module", () => {
    // Execute
    const ninja = container.get<Ninja>("Ninja");

    // Verify
    expect(ninja.fight()).to.be.eql("cut!");
  });
  it("use transition scope", () => {
    // Execute
    const warrior1 = container.get<Warrior>(TYPES.Warrior);
    const warrior2 = container.get<Warrior>(TYPES.Warrior);

    // Verify
    expect(warrior1 === warrior2).to.be.false;
  });
  it("use singleton scope", () => {
    // Execute
    const ninja1 = container.get<Ninja>("Ninja");
    const ninja2 = container.get<Ninja>("Ninja");

    // Verify
    expect(ninja1 === ninja2).to.be.true;
  });
});
