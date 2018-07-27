"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_config_1 = require("./inversify.config");
var types_1 = require("./types");
var warrior = inversify_config_1.container.get(types_1.TYPES.Warrior);
console.log(warrior.fight());
console.log(warrior.snake());
