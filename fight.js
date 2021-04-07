"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fight = void 0;
function fight(pok1, pok2) {
    return pok1.speed > pok2.speed ? pok1 : pok2;
}
exports.fight = fight;
