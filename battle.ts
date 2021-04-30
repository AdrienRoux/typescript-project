import {Pokemon} from "./models/pokemon";

export function attacksFirst(pok1: Pokemon, pok2: Pokemon): Pokemon {
    if (pok1.speed == pok2.speed){
        if (Math.random() * 2 < 1){
            return pok1;
        } else {
            return pok2;
        }
    }
    return pok1.speed > pok2.speed ? pok1 : pok2;
}

export function isDead(pok1: Pokemon, pok2: Pokemon) : boolean{
    return !(pok1.hp > 0 && pok2.hp > 0);


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

export function round(pok1: Pokemon, pok2: Pokemon): Promise<Pokemon> {
    const first = attacksFirst(pok1, pok2);
    const last = attacksFirst(pok1, pok2) === pok1 ? pok1 : pok2;
    return new Promise(async (resolve, reject) => {
        while (isDead(first, last)) {
            first.roundAttack(first.getAttack(0), last);
            if (last.hp > 0) {
                last.roundAttack(last.getAttack(0), first);
            }
        }
        resolve(first.hp === 0 ? last : first);
    })
}
