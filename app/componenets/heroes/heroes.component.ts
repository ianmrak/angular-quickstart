import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {select} from 'ng2-redux';

import {HeroActions} from '../../actions/hero.actions';
import {Hero} from '../../hero';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    styleUrls: ['heroes.component.css'],
    templateUrl: 'heroes.component.html',
    providers: [HeroActions]
})

export class HeroesComponent implements OnInit {
    constructor(private router: Router,
                private actions: HeroActions) {
    }

    title = 'Tour of Heroes';
    selectedHero: Hero;
    @select('heroes') heroes: Observable<Hero[]>;

    ngOnInit(): void {
        this.actions.fetchHeroes();
    }


    onSelect(hero: Hero): void {
        this.actions.setCurrentHero(hero);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
