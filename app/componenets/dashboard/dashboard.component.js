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
var DashboardComponent = (function () {
    function DashboardComponent(router, actions) {
        this.router = router;
        this.actions = actions;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.actions.fetchHeroes();
    };
    DashboardComponent.prototype.goToDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    __decorate([
        ng2_redux_1.select('heroes'), 
        __metadata('design:type', Observable_1.Observable)
    ], DashboardComponent.prototype, "heroes", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            styleUrls: ['dashboard.component.css'],
            templateUrl: 'dashboard.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_actions_1.HeroActions])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map