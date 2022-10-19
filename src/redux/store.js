import {configureStore} from '@reduxjs/toolkit';
import unsplashSlice from './unsplash/unsplashSlice';

export const store = configureStore({
  reducer: {
    images: unsplashSlice,
  },
});
