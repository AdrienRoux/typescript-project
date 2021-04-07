import {Attack} from "../models/attack";
import {fire, water, plant, electric} from "./types";

export const bolt = new Attack({
    name: "Bolt",
    damage: 20,
    types: [electric]
})

export const ember = new Attack({
    name: "Ember",
    damage: 25,
    types: [fire]
})