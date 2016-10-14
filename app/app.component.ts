import {Component} from '@angular/core';
import {NgRedux, DevToolsExtension} from 'ng2-redux';
import {IAppState, rootReducer, enhancers} from './store/index';
const createLogger = require('redux-logger');

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`,
})
export class AppComponent {
    title = 'Tour of Heroes';

    constructor(private ngRedux: NgRedux<IAppState>,
                private devTool: DevToolsExtension) {
        this.ngRedux.configureStore(
            rootReducer,
            {},
            [createLogger()],
            [...enhancers, devTool.isEnabled() ? devTool.enhancer() : f => f]);
    }
}