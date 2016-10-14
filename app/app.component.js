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
var index_1 = require('./store/index');
var createLogger = require('redux-logger');
var AppComponent = (function () {
    function AppComponent(ngRedux, devTool) {
        this.ngRedux = ngRedux;
        this.devTool = devTool;
        this.title = 'Tour of Heroes';
        this.ngRedux.configureStore(index_1.rootReducer, {}, [createLogger()], index_1.enhancers.concat([devTool.isEnabled() ? devTool.enhancer() : function (f) { return f; }]));
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styleUrls: ['app/app.component.css'],
            template: "\n  <h1>{{title}}</h1>\n  <nav>\n    <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n    <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n  </nav>\n  <router-outlet></router-outlet>\n",
        }), 
        __metadata('design:paramtypes', [ng2_redux_1.NgRedux, ng2_redux_1.DevToolsExtension])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map