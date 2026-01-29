import { combineReducers, configureStore, createReducer } from "@reduxjs/toolkit";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, createTransform } from "redux-persist"
import { LOGOUT_DISPATCH } from "../theme";

let store;

const getStore = (globalState , connectors) => {
  const appReducer = createReducer(globalState, _ => {
    return globalState;
  });

  const reducer = combineReducers({
    app: appReducer,
    // ...reducers,
    ...connectors
  });

  const rootReducer = (state, action) => {
    if (action.type === LOGOUT_DISPATCH) {
      console.log("LOGOUT state cleared");
      state = undefined; // Reset state to initial values
    }
    return reducer(state, action);
  };

  // Transform to exclude channelStateData from persistence (it has circular references)
  const authTransform = createTransform(
    // transform state on its way to being serialized and persisted
    (inboundState, key) => {
      if (key === 'Auth') {
        const { channelStateData, ...rest } = inboundState;
        return rest;
      }
      return inboundState;
    },
    // transform state being rehydrated
    (outboundState, key) => {
      return outboundState;
    },
    // define which reducers this transform gets called for
    { whitelist: ['Auth'] }
  );

  const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["Auth"],
    transforms: [authTransform]
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
