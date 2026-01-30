import { combineReducers, configureStore, createReducer } from "@reduxjs/toolkit";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist"
import { LOGOUT_DISPATCH } from "../theme";

let store;

const getStore = (globalState, connectors) => {
  const appReducer = createReducer(globalState, _ => {
    return globalState;
  });

  const reducer = combineReducers({
    app: appReducer,
    // ...reducers,
    ...connectors
  });

  // console.log(reducer, 'reducer');
  console.log(connectors, 'connectors');

  const rootReducer = (state, action) => {
    if (action.type === LOGOUT_DISPATCH) {
      console.log("LOGOUT state cleared");
      state = undefined; // Reset state to initial values
    }
    return reducer(state, action);
  };

  const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["Auth"]
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false
      })
  });

  return store;
};

export { getStore, store };
