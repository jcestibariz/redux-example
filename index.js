'use strict';

const { createStore } = require('redux');
const { createAction, handleAction } = require('redux-actions');

const add = createAction('ADD');

const reducer = handleAction(add, (state, action) => state + action.payload, 0);

const store = createStore(reducer, 20);

store.dispatch(add(22));

console.log(store.getState());
