import { HERO_ACTIONS } from '../actions/hero.actions';
import { Hero } from '../app/hero';

const INITIAL_STATE: Hero[] = [];

export function heroReducer(state: Hero[] = INITIAL_STATE, action:any) {
    switch (action.type) {
        case HERO_ACTIONS.GET_HEROES:
            return action.payload.heroes;
        default:
            return state;
    }
}
