import storage from "redux-persist/lib/storage";
import {encryptTransform} from "redux-persist-transform-encrypt";
import {persistReducer, persistStore} from "redux-persist";
import rootReducer from "./reducers";
import {configureStore} from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_REDUX_SECRET_KEY as string,
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
  whitelist: ["auth"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
})

export type AppDispatch = typeof store.dispatch;
export const persistor= persistStore(store);
export default store;
