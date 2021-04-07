"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ember = exports.bolt = void 0;
var attack_1 = require("../models/attack");
var types_1 = require("./types");
exports.bolt = new attack_1.Attack({
    name: "Bolt",
    damage: 20,
    types: [types_1.electric]
});
exports.ember = new attack_1.Attack({
    name: "Ember",
    damage: 25,
    types: [types_1.fire]
});
