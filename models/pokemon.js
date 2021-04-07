"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(props) {
        this.name = props.name;
        this.speed = props.speed;
        this.hp = props.hp;
        this.attacks = props.attacks;
    }
    Pokemon.prototype.attack = function (attack, pok) {
        pok.hp -= attack.damage;
    };
    Pokemon.prototype.getRandomAttack = function () {
        var chosen = Math.random() * this.attacks.length;
        return this.attacks[chosen];
    };
    Pokemon.prototype.getAttack = function (param) {
        if (typeof param == "string") {
            for (var i = 0; i < this.attacks.length; i++) {
                if (this.attacks[i].name === param) {
                    return this.attacks[i];
                }
            }
        }
        if (typeof param == "number") {
            return this.attacks[param];
        }
        return this.attacks[0];
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
