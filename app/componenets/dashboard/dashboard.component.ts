import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {select} from 'ng2-redux';

import {Hero} from '../../hero';
import {HeroActions} from '../../actions/hero.actions';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    styleUrls: [ 'dashboard.component.css' ],
    templateUrl: 'dashboard.component.html',
})

export class DashboardComponent {

    @select('heroes') heroes: Observable<Hero[]>;

    constructor(private router: Router,
                private actions: HeroActions) {
    }

    ngOnInit(): void {
        this.actions.fetchHeroes();
    }

    goToDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}