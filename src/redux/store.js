import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};
const persistedReducer = persistReducer(persistConfig, contactsReducer);

const reducer = {
  contacts: persistedReducer,
  filter: filterReducer,
};

export const store = configureStore({ reducer: reducer });

export const persistor = persistStore(store);
