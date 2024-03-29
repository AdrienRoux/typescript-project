"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = exports.fight = exports.isDead = exports.attacksFirst = void 0;
function attacksFirst(pok1, pok2) {
    if (pok1.speed == pok2.speed) {
        if (Math.random() * 2 < 1) {
            return pok1;
        }
        else {
            return pok2;
        }
    }
    return pok1.speed > pok2.speed ? pok1 : pok2;
}
exports.attacksFirst = attacksFirst;
function isDead(pok1, pok2) {
    return !(pok1.hp > 0 && pok2.hp > 0);
}
exports.isDead = isDead;
function fight(pok1, pok2) {
    while (pok1.hp > 0 && pok2.hp > 0) {
        if (attacksFirst(pok1, pok2) === pok1) {
            pok1.attack(pok1.getAttack(0), pok2);
        }
        else {
            pok2.attack(pok2.getAttack(0), pok1);
        }
    }
    return pok1.hp === 0 ? pok2 : pok1;
}
exports.fight = fight;
function round(pok1, pok2) {
    var _this = this;
    var first = attacksFirst(pok1, pok2);
    var last = attacksFirst(pok1, pok2) === pok1 ? pok1 : pok2;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            while (isDead(first, last)) {
                first.roundAttack(first.getAttack(0), last);
                if (last.hp > 0) {
                    last.roundAttack(last.getAttack(0), first);
                }
            }
            resolve(first.hp === 0 ? last : first);
            return [2 /*return*/];
        });
    }); });
}
exports.round = round;
