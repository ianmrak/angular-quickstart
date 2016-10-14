"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_redux_1 = require('ng2-redux');
var hero_service_1 = require('../services/hero.service');
exports.HERO_ACTIONS = {
    CURRENT_HERO: 'CURRENT_HERO',
    GET_HEROES: 'GET_HEROES',
};
var HeroActions = (function () {
    function HeroActions(ngRedux, heroService) {
        this.ngRedux = ngRedux;
        this.heroService = heroService;
    }
    HeroActions.prototype.fetchHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.ngRedux.dispatch(_this.setHeroes(heroes)); });
    };
    HeroActions.prototype.setCurrentHero = function (hero) {
        this.ngRedux.dispatch(this.setHero(hero));
    };
    HeroActions.prototype.setHero = function (hero) {
        return {
            type: exports.HERO_ACTIONS.CURRENT_HERO,
            payload: hero
        };
    };
    HeroActions.prototype.setHeroes = function (heroes) {
        return {
            type: exports.HERO_ACTIONS.GET_HEROES,
            payload: {
                heroes: heroes
            }
        };
    };
    HeroActions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ng2_redux_1.NgRedux, hero_service_1.HeroService])
    ], HeroActions);
    return HeroActions;
}());
exports.HeroActions = HeroActions;
//# sourceMappingURL=hero.actions.js.map