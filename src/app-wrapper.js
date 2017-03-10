'use strict';

import React, {
    Component
} from 'react'

import {
  AsyncStorage
} from 'react-native'

import { combineReducers } from 'redux'
import { orm } from './reducers-orm/model-blocks'
import { header_title } from './reducers/reducers-header-title'
import { selected_tally_date } from './reducers/reducers-date'
import { selected_planter } from './reducers/reducers-planter'
import { selected_contract } from './reducers/reducers-contract'
import { selected_block } from './reducers/reducers-block'
import { selected_request_key } from './reducers/reducers-request-key'


import { Provider } from 'react-redux'
import App from './app'
import { applyMiddleware, createStore, compose } from 'redux'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import { persistStore, autoRehydrate} from 'redux-persist'

//Setup for Store Configuration  --- added asyncInitialState outerReducer
const rootReducer = combineReducers(Object.assign({},
  {
    orm: orm.reducer(),
    header_title,
    selected_planter,
    selected_contract,
    selected_block,
    selected_request_key,
    selected_tally_date,
  }
));

//---------for logger middleware
const logger = createLogger()


const enhancer = compose(
  applyMiddleware(promise, logger),
  autoRehydrate(),
  global.reduxNativeDevTools ? global.reduxNativeDevTools(/*options*/) : nope => nope,
);

//Store Configuration  -- redux-persist for persistent data storage
const store = createStore(rootReducer, enhancer);

if (global.reduxNativeDevTools) {
    global.reduxNativeDevTools.updateStore(store);
  }

persistStore(store, {storage: AsyncStorage}).purgeAll();  //note: add --> .purgeAll()  to clean if necessary

// Providing the App with the configured Store
export default class appWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
