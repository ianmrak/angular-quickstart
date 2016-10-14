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
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var ng2_redux_1 = require('ng2-redux');
var hero_actions_1 = require('../../actions/hero.actions');
var HeroesComponent = (function () {
    function HeroesComponent(router, actions) {
        this.router = router;
        this.actions = actions;
        this.title = 'Tour of Heroes';
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.actions.fetchHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.actions.setCurrentHero(hero);
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    __decorate([
        ng2_redux_1.select('heroes'), 
        __metadata('design:type', Observable_1.Observable)
    ], HeroesComponent.prototype, "heroes", void 0);
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            styleUrls: ['heroes.component.css'],
            templateUrl: 'heroes.component.html',
            providers: [hero_actions_1.HeroActions]
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_actions_1.HeroActions])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map