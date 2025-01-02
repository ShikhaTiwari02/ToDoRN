import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducer';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// const persistedReducer = persistReducer(persistConfig, todoReducer);

const rootReducer = combineReducers({
  todos: todoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // You can further configure here, like ignoring specific actions or paths
        ignoredActions: ['persist/PERSIST'],
        ignoredPaths: ['root'], // Ignore certain parts of the state
      },
    }),
});

// const store = configureStore({
//   reducer: {
//     todos: todoReducer,
//   },
// });
export const persistor = persistStore(store);


export default store;
