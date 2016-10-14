import { combineReducers } from 'redux';
const persistState = require('redux-localstorage');
import { heroReducer } from './hero.reducer';
import { Hero } from '../hero';

export interface IAppState {
    heroes?: Hero[];

};

export const rootReducer = combineReducers<IAppState>({
    heroes: heroReducer,

});

export const enhancers = [
    persistState('heroes', { key: 'ng2-redux/examples/counter' })
];

