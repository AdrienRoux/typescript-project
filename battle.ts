import {Pokemon} from "./models/pokemon";

export function attacksFirst(pok1: Pokemon, pok2: Pokemon): Pokemon {
    return pok1.speed > pok2.speed ? pok1 : pok2;
}

export function fight(pok1: Pokemon, pok2: Pokemon): Pokemon {
    while (pok1.hp > 0 && pok2.hp > 0){
        if (attacksFirst(pok1, pok2) === pok1){
            pok1.attack(pok1.getAttack(0), pok2);
        } else {
            pok2.attack(pok2.getAttack(0), pok1);
        }
    }

    return pok1.hp === 0 ? pok2 : pok1;
}
