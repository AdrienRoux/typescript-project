"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attacksFirst = void 0;
function attacksFirst(pok1, pok2) {
    return pok1.speed > pok2.speed ? pok1 : pok2;
}
exports.attacksFirst = attacksFirst;
