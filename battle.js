"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fight = exports.attacksFirst = void 0;
function attacksFirst(pok1, pok2) {
    return pok1.speed > pok2.speed ? pok1 : pok2;
}
exports.attacksFirst = attacksFirst;
function fight(pok1, pok2) {
    while (pok1.hp > 0 && pok2.hp > 0) {
        if (attacksFirst(pok1, pok2) === pok1) {
            pok1.attack(pok1.getAttack(0), pok2);
        }
        else {
            pok2.attack(pok2.getAttack(0), pok1);
        }
    }
    return pok1.hp === 0 ? pok2 : pok1;
}
exports.fight = fight;
