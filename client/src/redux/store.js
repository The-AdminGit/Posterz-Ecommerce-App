import { combineReducers, configureStore,applyMiddleware } from "@reduxjs/toolkit";
import CategoryReducer from './categorySlice';
import cartReducer from './cartSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk'



const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({ 
    CategoryReducer,
    cartReducer
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer,applyMiddleware(thunk))

  export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
   
  })
  
  export const persistor = persistStore(store)