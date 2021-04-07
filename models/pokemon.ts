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

    attack(attack: Attack, pok: Pokemon){
        pok.hp -= attack.damage;
    }

    getRandomAttack(): Attack{
        let chosen = Math.random() * this.attacks.length;
        return this.attacks[chosen];
    }

    getAttack(id: number): Attack ;
    getAttack(name: string): Attack;

    getAttack(param: any): Attack{
        if (typeof param == "string"){
            for (let i = 0; i < this.attacks.length; i++) {
                if (this.attacks[i].name === param) {
                    return this.attacks[i];
                }
            }
        }

        if (typeof param == "number") {
            return this.attacks[param];
        }

        return this.attacks[0];
    }
}