import {container} from "./inversify.config";
import {TYPES} from "./types";
import {Warrior} from "./interfaces";

import {expect} from "chai";

const warrior = container.get<Warrior>(TYPES.Warrior);

expect(warrior.fight()).to.be.eql("cut!")
expect(warrior.snake()).to.be.eql("hit!")