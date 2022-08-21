import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedReducer } from './user/authSlice';
import { contactsApi } from './contactsApi';
import { filterSlice } from './filterSlice';
import { userApi } from './user/userApi';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

    contactsApi.middleware,
    userApi.middleware,
  ],
});

export const persistor = persistStore(store);
