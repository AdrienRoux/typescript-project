import {Type} from "./type";

interface AttackProps {
    name: string;
    damage: number;
    types: [Type]
}

export class Attack implements AttackProps{

    name: string;
    damage: number;
    types: [Type];

    constructor(props: AttackProps) {
        this.name = props.name;
        this.damage = props.damage;
        this.types = props.types;
    }
}