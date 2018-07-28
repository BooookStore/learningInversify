import { expect } from "chai";

import { container } from "./inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";

// Warrior is actually Ninja
const warrior: Warrior = container.get<Warrior>(TYPES.Warrior);

expect(warrior.fight()).to.be.eql("cut!");
expect(warrior.snake()).to.be.eql("hit!");
