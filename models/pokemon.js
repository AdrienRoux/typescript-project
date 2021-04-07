"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    Pokemon.prototype.test = function () {
        return true;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
