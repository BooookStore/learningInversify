"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_config_1 = require("./inversify.config");
var types_1 = require("./types");
var chai_1 = require("chai");
var warrior = inversify_config_1.container.get(types_1.TYPES.Warrior);
chai_1.expect(warrior.fight()).to.be.eql("cut!");
chai_1.expect(warrior.snake()).to.be.eql("hit!");
