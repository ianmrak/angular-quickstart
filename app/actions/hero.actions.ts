import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';

import {Hero} from '../app/hero';
import {HeroService} from '../app/hero.service';

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

    private setHero(keyword: string) {
        return {
            type: HERO_ACTIONS.CURRENT_HERO,
            payload: keyword
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
