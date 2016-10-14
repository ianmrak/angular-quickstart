"use strict";
var hero_actions_1 = require('../actions/hero.actions');
var INITIAL_STATE = [];
function heroReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case hero_actions_1.HERO_ACTIONS.GET_HEROES:
            return action.payload.heroes;
        default:
            return state;
    }
}
exports.heroReducer = heroReducer;
//# sourceMappingURL=hero.reducer.js.map