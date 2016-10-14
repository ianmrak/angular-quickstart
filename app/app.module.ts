import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgReduxModule} from 'ng2-redux';

import {AppComponent}        from './app.component';
import {HeroDetailComponent} from './componenets/hero-detail/hero-detail.component';
import {HeroesComponent}     from './componenets/heroes/heroes.component';
import {DashboardComponent} from "./componenets/dashboard/dashboard.component";
import {HeroActions} from "./actions/hero.actions";
import {HeroService} from "./services/hero.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgReduxModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'heroes',
                component: HeroesComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'detail/:id',
                component: HeroDetailComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent
    ],
    providers: [
        HeroActions,
        HeroService
    ],
    bootstrap: [AppComponent]
})


export class AppModule {
}