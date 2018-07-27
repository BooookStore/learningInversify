import {container} from "./inversify.config";
import {TYPES} from "./types";
import {Warrior} from "./interfaces";

const warrior = container.get<Warrior>(TYPES.Warrior);

console.log(warrior.fight());
console.log(warrior.snake());