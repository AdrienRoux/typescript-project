import {Pokemon} from "./models/pokemon";

export function attacksFirst(pok1: Pokemon, pok2: Pokemon): Pokemon {
    return pok1.speed > pok2.speed ? pok1 : pok2;
}