import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
import reduxThunk from 'redux-thunk';

// const middlewares = [];


export const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

export const persistor = persistStore(store);

export default { store, persistStore };