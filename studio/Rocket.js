"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapcityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapcityKg = totalCapcityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMasskg = function () {
        var combinedMass = 0;
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    return Rocket;
}());
exports.Rocket = Rocket;
