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
    Pokemon.prototype.test = function () {
        return true;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
