import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';

import {Hero} from '../hero';
import {HeroService} from '../services/hero.service';

export const HERO_ACTIONS = {
    CURRENT_HERO: 'CURRENT_HERO',
    GET_HEROES: 'GET_HEROES',
};

@Injectable()
export class HeroActions {
    constructor(private ngRedux: NgRedux<any>,
                private heroService: HeroService) {
    }

    fetchHeroes(): void {
        this.heroService.getHeroes()
            .then(heroes => this.ngRedux.dispatch(this.setHeroes(heroes)));
    }

    setCurrentHero(hero: Hero): void {
        this.ngRedux.dispatch(this.setHero(hero));
    }

    private setHero(hero: Hero) {
        return {
            type: HERO_ACTIONS.CURRENT_HERO,
            payload: hero
        };
    }

    private setHeroes(heroes: Hero[]) {
        return {
            type: HERO_ACTIONS.GET_HEROES,
            payload: {
                heroes: heroes
            }
        };
    }
}
