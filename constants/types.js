"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.electric = exports.plant = exports.water = exports.fire = void 0;
var type_1 = require("../models/type");
exports.fire = new type_1.Type({
    name: "Fire"
});
exports.water = new type_1.Type({
    name: "Water"
});
exports.plant = new type_1.Type({
    name: "Plant"
});
exports.electric = new type_1.Type({
    name: "Electric"
});
