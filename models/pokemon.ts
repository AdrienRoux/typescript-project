import {Attack} from "./attack";

interface PokemonProps {
    name: string;
    speed: number;
    hp: number;
    attacks: [Attack]
}

export class Pokemon implements PokemonProps{

    name: string;
    speed: number;
    hp: number;
    attacks: [Attack];

    constructor(props: PokemonProps) {
        this.name = props.name;
        this.speed = props.speed;
        this.hp = props.hp;
        this.attacks = props.attacks;
    }

    test(): boolean {
        return true;
    }

}