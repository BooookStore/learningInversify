import {container} from "./inversify.config";
import {TYPES} from "./types";
import {Warrior} from "./interfaces";

import {expect} from "chai";
import { Ninja } from "./entities";

const warrior = container.get<Warrior>(TYPES.Warrior);
const ninja = container.get<Ninja>("Ninja");

expect(warrior.fight()).to.be.eql("cut!");
expect(warrior.snake()).to.be.eql("hit!");

expect(ninja.fight()).to.be.eql("cut!");