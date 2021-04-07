interface TypeProps {
    name: string;
}

export class Type implements TypeProps{

    name: string;

    constructor(props: TypeProps) {
        this.name = props.name;
    }
}