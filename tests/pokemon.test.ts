import {Pokemon} from "../models/pokemon";
import {fight} from "../fight";

const pokemon = new Pokemon("Test", 0);

const pikachu = new Pokemon("Pikachu", 20);
const salameche = new Pokemon("Salameche", 15);

describe('Test parametres Pokemons', () => {
    it('Test Pikachu props', () => {
        expect(pikachu.name).toBe('Pikachu');
        expect(pikachu.speed).toBe(20);
    });

    it('Test Salameche props', () =>{
        expect(salameche.name).toBe('Salameche');
        expect(salameche.speed).toBe(15);
    })
});

describe('Test fight', () => {
    it('Should return Pikachu', () => {
        expect(fight(pikachu,salameche)).toBe(pikachu);
    });

    it('Should return Salameche', () =>{
        salameche.speed = 25;
        expect(fight(pikachu,salameche)).toBe(salameche);
    })
});

test('test pokemon', () => {
    expect(pokemon.test()).toBe(true);
});