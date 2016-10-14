"use strict";
var redux_1 = require('redux');
var persistState = require('redux-localstorage');
var hero_reducer_1 = require('./hero.reducer');
;
exports.rootReducer = redux_1.combineReducers({
    heroes: hero_reducer_1.heroReducer,
});
exports.enhancers = [
    persistState('heroes', { key: 'ng2-redux/examples/counter' })
];
//# sourceMappingURL=index.js.map