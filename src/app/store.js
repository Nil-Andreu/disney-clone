import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movie/movieSlice';
import userReducer from '../features/user/userSlice.jsx'

export const store = configureStore({
  reducer: {
    movie: movieReducer, //We tell the app we have this reducer at our disposal
    user: userReducer,
  },
});
