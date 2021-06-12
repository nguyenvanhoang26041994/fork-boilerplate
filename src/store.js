import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import translationReducer from '@reducers/translationReducer';

const reducer = combineReducers({
  t: translationReducer,
});

const store = createStore(reducer, devToolsEnhancer());

export default store;
