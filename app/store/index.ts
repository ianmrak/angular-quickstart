import { combineReducers } from 'redux';
const persistState = require('redux-localstorage');
import { heroReducer } from './hero.reducer';

export interface IAppState {
    counter?: number;

};

export const rootReducer = combineReducers<IAppState>({
    heroes: heroReducer,

});

export const enhancers = [
    persistState('counter', { key: 'ng2-redux/examples/counter' })
];

