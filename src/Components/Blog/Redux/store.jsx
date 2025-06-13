import { configureStore, combineReducers } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// 1. Set up persist config
const persistConfig = {
  key: "root",
  storage,
};

// 2. Combine reducers
const rootReducer = combineReducers({
  blogs: blogReducer,
});

// 3. Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure the store with default middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist
    }),
});

export const persistor = persistStore(store);
