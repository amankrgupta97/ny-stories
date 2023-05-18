import { AnyAction, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
import newsReducer from "../slice/newsSlice";
import searchReducer from "../slice/searchSlice";
import statusReducer from "../slice/statusSlice";
import errorReducer from "../slice/errorSlice";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
  search: searchReducer,
  status: statusReducer,
  error: errorReducer,
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === "auth/logout") {
    state = undefined;
  }
  return reducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
