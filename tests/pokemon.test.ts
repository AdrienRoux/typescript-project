import {Pokemon} from "../models/pokemon";
import {attacksFirst, fight, round} from "../battle";
import {bolt, ember} from "../constants/attacks";


//Pokemons
const pikachu = new Pokemon({
    name: "Pikachu",
    speed: 20,
    hp: 100,
    attacks: [bolt]
});

const salameche = new Pokemon({
    name: "Salameche",
    speed: 15,
    hp: 120,
    attacks: [ember]
});

describe('Test parametres Pokemons', () => {
    it('Test Pikachu props', () => {
        expect(pikachu.name).toBe('Pikachu');
        expect(pikachu.speed).toBe(20);
        expect(pikachu.hp).toBe(100);
        expect(pikachu.attacks).toStrictEqual([bolt]);
    });

    it('Test Salameche props', () =>{
        expect(salameche.name).toBe('Salameche');
        expect(salameche.speed).toBe(15);
        expect(salameche.hp).toBe(120);
        expect(salameche.attacks).toStrictEqual([ember]);
    })
});

describe('Test fight', () => {
    it('Should return Pikachu', () => {
        expect(attacksFirst(pikachu,salameche)).toBe(pikachu);
    });

    it('Should return Salameche', () =>{
        salameche.speed = 25;
        expect(attacksFirst(pikachu,salameche)).toBe(salameche);
    })
});

describe('Test battle', () => {
    it('Should return Salameche', () => {
        expect(fight(pikachu, salameche)).toBe(salameche);
    })
});

describe('Test Pokemon Battle', () => {
    it('Should return Salameche',() => {
        round(pikachu, salameche).then(value=> {
            expect(value).toBe(salameche);
        })

    })
})
